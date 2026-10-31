import { rmSync, existsSync } from 'node:fs';
import { SITE_OUTPUT_DIR } from '../src/lib/build-output.ts';

// Remove previous build manifest only; keep .git and publishing repo files.
const manifest = `${SITE_OUTPUT_DIR}/.astro`;
if (existsSync(manifest)) rmSync(manifest, { recursive: true, force: true });
console.log('prepare-output: cleaned', manifest);