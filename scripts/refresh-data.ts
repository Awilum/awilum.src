/**
 * Refresh the About page statistics.
 *
 * Fetches the live, public figures for Sergey Romanenko's profiles from the
 * sources below and writes the result to `src/data/about-stats.json`. The
 * About page imports that file at build time, so the page always shows the
 * numbers as of the most recent refresh — without any manual source-code
 * edits for routine updates.
 *
 * Sources
 *   GitHub    — public REST API (no auth needed for read-only profile data).
 *   Stepik    — public REST API (read-only profile data for user 561566563).
 *   StepStat  — public user page (no API); HTML is parsed for the figures.
 *   LinkedIn  — public profile page; the site blocks unauthenticated bots, so
 *               the fetcher is best-effort and its absence is not an error.
 *
 * Usage
 *   npm run refresh-data
 *
 * Behavior
 *   Fetches fresh data from every configured source (GitHub, Stepik, StepStat,
 *   LinkedIn), validates and normalizes each response, then writes
 *   `src/data/about-stats.json`. Sources that fail, return malformed data, or
 *   are temporarily unavailable keep their last known valid data — nothing on
 *   disk is replaced with `null`, an empty string, zero, or a fabricated value
 *   because a request failed. Failed sources are recorded as `unavailable` so
 *   the page never presents a stale number as freshly verified. The script
 *   reports which sources succeeded and which failed, and exits non-zero only
 *   if the output file could not be written.
 *
 *   LinkedIn is best-effort: the profile blocks unauthenticated requests, so a
 *   failure there is expected and does not fail the refresh.
 *
 * CI
 *   The same script runs on a schedule in
 *   `.github/workflows/refresh-data.yml` (cron + `workflow_dispatch`) and
 *   commits the refreshed `src/data/about-stats.json` only when it changes.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(here, '../src/data/about-stats.json');

const GITHUB_USER = 'Awilum';
const STEPIK_USER_ID = 561566563;
const STEPSTAT_USER_ID = 561566563;
const LINKEDIN_PROFILE = 'sergey-romanenko';

interface FetchedSource {
  source: string;
  url: string;
  status: 'ok' | 'unavailable';
  retrievedAt: string;
  data?: Record<string, unknown>;
}

const USER_AGENT = 'awilum.github.io-refresh-data/1.0';

/** Fetch with a hard timeout so a stalled source cannot block the whole refresh. */
async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit,
  ms = 20000,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function getJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetchWithTimeout(url, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

/** GitHub: user profile (repos, followers, account age). */
async function fetchGitHub(): Promise<FetchedSource> {
  const url = `https://api.github.com/users/${GITHUB_USER}`;
  let data: Record<string, unknown> | null = null;
  let lastStatus = 'network error';
  try {
    const res = await fetchWithTimeout(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    lastStatus = String(res.status);
    if (res.ok) data = (await res.json()) as Record<string, unknown>;
  } catch {
    // rate limits and network errors fall through to the null branch below
  }
  const retrievedAt = new Date().toISOString();
  if (!data || data.message) {
    console.warn(`refresh-data: GitHub unavailable (HTTP ${lastStatus}) — keeping existing data if present`);
    return { source: 'GitHub', url, status: 'unavailable', retrievedAt };
  }
  const createdAt = typeof data.created_at === 'string' ? data.created_at : null;
  return {
    source: 'GitHub',
    url,
    status: 'ok',
    retrievedAt,
    data: {
      username: GITHUB_USER,
      name: data.name ?? null,
      publicRepos: data.public_repos ?? null,
      publicGists: data.public_gists ?? null,
      followers: data.followers ?? null,
      following: data.following ?? null,
      memberSince: createdAt,
      bio: data.bio ?? null,
      blog: data.blog ?? null,
    },
  };
}

/** Stepik: public profile data for the course author. */
async function fetchStepik(): Promise<FetchedSource> {
  const url = `https://stepik.org/api/users/${STEPIK_USER_ID}`;
  const data = await getJson(url);
  const retrievedAt = new Date().toISOString();
  const user = (data as { users?: Record<string, unknown>[] } | null)?.users?.[0];
  if (!user) {
    return { source: 'Stepik', url, status: 'unavailable', retrievedAt };
  }
  return {
    source: 'Stepik',
    url,
    status: 'ok',
    retrievedAt,
    data: {
      userId: STEPIK_USER_ID,
      fullName: [user.first_name, user.last_name].filter(Boolean).join(' '),
      isAuthor: Boolean(user.is_author),
      reputation: user.reputation ?? null,
      reputationRank: user.reputation_rank ?? null,
      knowledge: user.knowledge ?? null,
      knowledgeRank: user.knowledge_rank ?? null,
      createdCoursesCount: user.created_courses_count ?? null,
      createdLessonsCount: user.created_lessons_count ?? null,
      issuedCertificatesCount: user.issued_certificates_count ?? null,
      followersCount: user.followers_count ?? null,
      solvedStepsCount: user.solved_steps_count ?? null,
      joinDate: user.join_date ?? null,
      city: user.city ?? null,
      shortBio: user.short_bio ?? null,
    },
  };
}

/** StepStat: public user page; the figures live in a table inside the HTML. */
async function fetchStepStat(): Promise<FetchedSource> {
  const url = `https://stepstat.ru/user/${STEPSTAT_USER_ID}`;
  const retrievedAt = new Date().toISOString();
  try {
    const res = await fetchWithTimeout(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) {
      return { source: 'StepStat', url, status: 'unavailable', retrievedAt };
    }
    const html = await res.text();
    // The user page renders a table with the metric name in one cell and the
    // value in the next. Parse it out without pulling in a DOM dependency.
    const text = html
      // Strip the script/style noise so the table is the only thing left.
      .replace(/<script[\s\S]*?<\/script>/g, '')
      .replace(/<style[\s\S]*?<\/style>/g, '');
    const metricLabels: Record<string, string> = {
      'Созданные курсы': 'createdCourses',
      'Уроков в курсах': 'lessons',
      'Квизов в курсах': 'quizzes',
      'Задач с кодом в курсах': 'codeTasks',
      'Выданные сертификаты': 'certificatesIssued',
      'Полученные отзывы': 'reviews',
      'Учеников на курсах': 'students',
      'Подписчиков': 'followers',
      'Репутация': 'reputation',
      'Знания': 'knowledge',
    };
    const extracted: Record<string, number> = {};
    for (const [label, key] of Object.entries(metricLabels)) {
      // Try multiple patterns since the HTML structure varies
      const patterns = [
        new RegExp(`${label}[\\s\\S]{0,150}class="usr-value"[^>]*>\\s*([\\d\\s\\u00a0]+)`, 'u'),
        new RegExp(`${label}[\\s\\S]{0,100}>([\\d\\s\\u00a0]+)<`, 'u'),
        new RegExp(`${label}\\s*<\\/?t[dh][^>]*>\\s*(?:<[^>]+>)*\\s*([\\d\\s\\u00a0]+)`, 'u'),
      ];
      for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) {
          const value = Number(match[1].replace(/[\s\u00a0]/g, ''));
          if (Number.isFinite(value)) {
            extracted[key] = value;
            break;
          }
        }
      }
    }
    const awardMatches = [...text.matchAll(/Stepik Awards (\d{4})[^<]*—\s*([^<"<]{2,60})/g)]
      .map((m) => ({ year: m[1], nomination: m[2].trim() }));
    if (Object.keys(extracted).length === 0 && awardMatches.length === 0) {
      return { source: 'StepStat', url, status: 'unavailable', retrievedAt };
    }
    return {
      source: 'StepStat',
      url,
      status: 'ok',
      retrievedAt,
      data: { userId: STEPSTAT_USER_ID, metrics: extracted, awards: awardMatches },
    };
  } catch {
    return { source: 'StepStat', url, status: 'unavailable', retrievedAt };
  }
}

/** LinkedIn: best-effort fetch; the profile blocks unauthenticated requests. */
async function fetchLinkedIn(): Promise<FetchedSource> {
  const url = `https://www.linkedin.com/in/${LINKEDIN_PROFILE}`;
  const retrievedAt = new Date().toISOString();
  try {
    const res = await fetchWithTimeout(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    if (!res.ok) {
      return { source: 'LinkedIn', url, status: 'unavailable', retrievedAt };
    }
    const html = await res.text();
    // Public pages expose a small JSON-LD profile block with headline and
    // company when the page is served without login; extract if present.
    const jsonLdMatch = html.match(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)"@type"\s*:\s*"Person"([\s\S]*?)<\/script>/i,
    );
    if (!jsonLdMatch) {
      return { source: 'LinkedIn', url, status: 'unavailable', retrievedAt };
    }
    const jsonLd = JSON.parse(jsonLdMatch[1] + '"@type": "Person"' + jsonLdMatch[2]) as Record<string, unknown>;
    return {
      source: 'LinkedIn',
      url,
      status: 'ok',
      retrievedAt,
      data: {
        headline: (jsonLd.headline as string) ?? null,
        jobTitle: (jsonLd.jobTitle as string) ?? null,
        description: (jsonLd.description as string) ?? null,
      },
    };
  } catch {
    return { source: 'LinkedIn', url, status: 'unavailable', retrievedAt };
  }
}

type StatsShape = {
  schema: string;
  retrievedAt: string;
  sources: Array<{ source: string; url: string; status: string; retrievedAt: string | null }>;
  github: Record<string, unknown> | null;
  stepik: Record<string, unknown> | null;
  stepStat: Record<string, unknown> | null;
  linkedIn: Record<string, unknown> | null;
};

type SourceName = 'github' | 'stepik' | 'stepStat' | 'linkedIn';

/** Read the last written stats file, if any. Never throws: a missing or
 * malformed file simply means there is no previously valid data to preserve. */
function readExisting(): StatsShape | null {
  try {
    if (!existsSync(OUT_PATH)) return null;
    const parsed = JSON.parse(readFileSync(OUT_PATH, 'utf8')) as unknown;
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed as StatsShape;
  } catch {
    return null;
  }
}

/** Aggregate all sources into the output shape the About page imports.
 *
 * A source that fails, returns malformed data, or is temporarily unavailable
 * keeps its last known valid data: nothing already on disk is replaced with
 * null, an empty string, zero, or a fabricated value because a request failed.
 * The source is still recorded as `unavailable` so the page never presents a
 * stale number as freshly verified. */
async function main() {
  const retrievedAt = new Date().toISOString(); // last refresh attempt
  const [github, stepik, stepStat, linkedIn] = await Promise.all([
    fetchGitHub(),
    fetchStepik(),
    fetchStepStat(),
    fetchLinkedIn(),
  ]);

  const existing = readExisting();
  const fetched: Record<SourceName, FetchedSource | null> = {
    github,
    stepik,
    stepStat,
    linkedIn,
  };

  // Preserve the last known valid data for any source that could not be
  // refreshed this run. A source that has never succeeded stays null.
  const dataFor = (name: SourceName): Record<string, unknown> | null => {
    const result = fetched[name];
    if (result?.status === 'ok' && result.data) return result.data;
    return existing?.[name] ?? null;
  };

  const sources = [github, stepik, stepStat, linkedIn] as FetchedSource[];
  const sourceEntries = sources.map((s) => {
    const ok = s.status === 'ok';
    const previous = existing?.sources?.find((x) => x.source === s.source);
    return {
      source: s.source,
      url: s.url,
      status: s.status,
      // `retrievedAt` records the last *successful* update. When a source
      // fails we keep the previous timestamp so the record of when the data
      // was last verified is not lost.
      retrievedAt: ok ? s.retrievedAt : (previous?.retrievedAt ?? null),
    };
  });

  const out: StatsShape = {
    schema: 'awilum.github.io/about-stats/1',
    retrievedAt,
    sources: sourceEntries,
    github: dataFor('github'),
    stepik: dataFor('stepik'),
    stepStat: dataFor('stepStat'),
    linkedIn: dataFor('linkedIn'),
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8');

  const ok = sources.filter((s) => s.status === 'ok').map((s) => s.source);
  const failed = sources.filter((s) => s.status !== 'ok').map((s) => s.source);
  console.log(`refresh-data: wrote ${OUT_PATH}`);
  console.log(`refresh-data: ok — ${ok.join(', ') || 'none'}`);
  if (failed.length) console.warn(`refresh-data: unavailable — ${failed.join(', ')}`);
  if (!existsSync(OUT_PATH)) {
    console.error('refresh-data: output was not written');
    process.exitCode = 1;
  }
}

main();
