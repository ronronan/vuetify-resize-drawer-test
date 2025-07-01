import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import ViteFonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },
  base: '/',
});
