import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@models': path.resolve(__dirname, './src/models'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        '**/.eslintrc.cjs',
        'vitest.config.ts',
        'next.config.js',
        '.next',
        'dist',
        '**/*.test.{js,jsx,ts,tsx}',
      ],
    },
  },
})
