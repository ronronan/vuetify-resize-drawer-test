import '@mdi/font/css/materialdesignicons.min.css';
import { createVResizeDrawer } from '@wdns/vuetify-resize-drawer';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { en, fr } from 'vuetify/locale';
// @ts-expect-error import style of vuetify
import 'vuetify/styles';

import App from './App.vue';
import './assets/style.css';
import router from './router';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#f5f5f9',
          surface: '#fff',
          primary: '#f18900',
          secondary: '#0068f1',
          success: '#00c853',
          warning: '#ffc107',
          error: '#f44336',
          info: '#03c9d7',
        },
      },
    },
  },
  locale: {
    locale: 'fr',
    fallback: 'en',
    messages: { fr, en },
  },
});

createApp(App)
  .use(vuetify)
  .use(router)
  .use(
    createVResizeDrawer({
      // options
    }),
  )
  .mount('#app');
