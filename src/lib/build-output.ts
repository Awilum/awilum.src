import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Resolve a path from this module when it runs on disk.
 *
 * Vite can evaluate modules under a non-file URL (Vitest's module runner does),
 * so the tests fall back to the project's working directory rather than failing
 * at import time. Astro's config loader and the Node scripts always take the
 * file-URL branch.
 */
function fromModule(relativePath: string, fallback: string): string {
  const url = new URL(relativePath, import.meta.url);
  return url.protocol === 'file:' ? fileURLToPath(url) : resolve(process.cwd(), fallback);
}

/**
 * The publishing repository that receives the generated site.
 *
 * Resolved from this module rather than `process.cwd()`: `npm run build` must
 * write to the same sibling checkout whether it is started from the repository
 * root, an IDE task, or a CI job with a different working directory.
 *
 * `awilum.github.io/` is a repository of its own. Nothing in this project
 * pushes to it; the build only writes files into its working tree so the result
 * can be reviewed and committed by hand.
 */
export const SITE_OUTPUT_DIR = fromModule('../../../awilum.github.io/', '../awilum.github.io');

/** The source repository root, resolved the same way. */
export const SOURCE_DIR = fromModule('../../', '.');
