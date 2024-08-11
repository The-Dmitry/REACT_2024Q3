import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    !process.env.VITEST ? remix({ appDirectory: 'app' }) : react(),
    tsconfigPaths(),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./app/setupTests/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      exclude: [
        '**/.eslintrc.cjs',
        'vite.config.ts',
        'vite-env.d.ts',
        'vitest.config.ts',
        'app/entry.client.tsx',
        'app/entry.server.tsx',
        'app/models',
        'app/vite-env.d.ts',
        'dist',
        'build',
        '**/*.test.{js,jsx,ts,tsx}',
      ],
    },
    env: loadEnv('test', process.cwd(), ''),
  },
})
