import { rmSync, existsSync } from 'node:fs';

const manifest = './dist/.astro';
if (existsSync(manifest)) rmSync(manifest, { recursive: true, force: true });
console.log('prepare-output: cleaned', manifest);
