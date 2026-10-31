import { SITE } from './site.ts';

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  image?: string;
};

export function canonicalUrl(path: string): string {
  const p = path.endsWith('/') ? path : path + '/';
  return new URL(p, SITE.url).toString();
}

export function buildSeo(props: SeoProps) {
  const canonical = canonicalUrl(props.path);
  const title = props.title;
  const description = props.description;
  const image = props.image ?? `${SITE.url}/og.png`;
  const jsonLd = props.jsonLd
    ? Array.isArray(props.jsonLd)
      ? props.jsonLd
      : [props.jsonLd]
    : [];
  return { title, description, canonical, image, jsonLd, type: props.type ?? 'website' };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.author,
    url: SITE.mainSite,
    sameAs: [SITE.github, SITE.mainSite, 'https://twitter.com/awilum_'],
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.title,
    url: SITE.url,
    author: { '@type': 'Person', name: SITE.author },
  };
}

export function softwareSourceCodeJsonLd(p: { title: string; description: string; repo: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: p.title,
    description: p.description,
    codeRepository: p.repo,
    url: canonicalUrl(p.path),
    author: { '@type': 'Person', name: SITE.author },
    programmingLanguage: [],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonicalUrl(it.path),
    })),
  };
}