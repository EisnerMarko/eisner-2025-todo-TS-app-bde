import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/eisner-2025-todo-TS-app-bde-main/',
  test: {
    environment: 'jsdom',
  },
});