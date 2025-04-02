import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8', // Можно заменить на 'istanbul'
      reporter: ['text', 'json', 'html'], // Форматы отчетов о покрытии кода
    },
  },
});