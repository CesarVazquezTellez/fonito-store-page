import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    hmr: {
      overlay: false, // Disable HMR overlay
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
