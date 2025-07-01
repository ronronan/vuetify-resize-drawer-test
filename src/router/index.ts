import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '',
      name: 'homeR',
      redirect: '/home',
      meta: {
        title: 'Accueil',
      },
    },
    {
      path: '/home',
      name: 'Accueil',
      component: HomePage,
      meta: {
        title: 'Accueil',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: NotFoundPage,
      meta: {
        title: 'Page non trouvée',
        superAdmin: true,
        user: true,
      },
    },
  ],
});

export default router;
