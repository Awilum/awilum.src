import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
// /awilum.src/src/lib -> /awilum.src -> parent is /Applications/Projects/web
export const SITE_OUTPUT_DIR = path.resolve(here, '..', '..', '..', 'awilum.github.io');