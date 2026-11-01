import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { SITE_OUTPUT_DIR } from '../src/lib/build-output.ts';

const src = 'dist';
if (existsSync(src)) {
  if (!existsSync(SITE_OUTPUT_DIR)) mkdirSync(SITE_OUTPUT_DIR, { recursive: true });
  cpSync(src, SITE_OUTPUT_DIR, { recursive: true, force: true });
  console.log('finalize-output: copied', src, '->', SITE_OUTPUT_DIR);
} else {
  console.log('finalize-output: no dist to copy');
}
