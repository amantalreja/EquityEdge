/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // This line tells Vitest to execute the setup file before running tests
    setupFiles: './src/test/setup.ts',
    include: ['tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})