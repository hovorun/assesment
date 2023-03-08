import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
      },
      {
        path: '/game',
        name: 'Game',
        component: () => import(/* webpackChunkName: "game" */ '@/views/game.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
