import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../components/layout/Landing.vue';

import AuthoriseCallback from '../components/oauth/AuthoriseCallback.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/oauth/authorise',
    name: 'AuthoriseCallback',
    component: AuthoriseCallback
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
