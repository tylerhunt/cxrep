import path from 'node:path';
import { defineConfig } from 'vite';

import reactPlugin from '@vitejs/plugin-react';
import rubyPlugin from 'vite-plugin-ruby';
import svgPlugin from 'vite-plugin-svgr';
import tailwindCSSPlugin from '@tailwindcss/vite';

export default defineConfig({
  plugins: [reactPlugin(), rubyPlugin(), svgPlugin(), tailwindCSSPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/javascript'),
    },
  },
  server: {
    https: process.env.VITE_SSL_CERT &&
      process.env.VITE_SSL_KEY && {
        cert: process.env.VITE_SSL_CERT,
        key: process.env.VITE_SSL_KEY,
      },
  },
});
