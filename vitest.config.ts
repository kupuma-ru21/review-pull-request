import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// FIXME: https://github.com/vitest-dev/vitest/discussions/1573#discussioncomment-3653362

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
});