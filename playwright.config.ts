import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:4322' },
  webServer: {
    command: 'cd /Applications/Projects/web/awilum.github.io && python3 -m http.server 4322',
    url: 'http://localhost:4322',
    reuseExistingServer: true,
    timeout: 30000,
  },
});