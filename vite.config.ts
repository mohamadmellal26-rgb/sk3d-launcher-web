import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import million from 'million/compiler';

export default defineConfig({
  plugins: [
    million.vite({ auto: true }), // مكتبة التسريع
    react(),                     // دعم React
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});