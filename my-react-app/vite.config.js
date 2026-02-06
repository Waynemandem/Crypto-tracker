import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Remove source maps in production to reduce bundle size
    sourcemap: false,
    // Use esbuild for minification (built-in, no extra dependency needed)
    minify: 'esbuild',
  },
  // Server config for development
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
