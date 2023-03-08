import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/login.vue'),
      },
      {
        path: '/game',
        name: 'Game',
        component: () => import(/* webpackChunkName: "game" */ '@/components/game.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
