import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../components/layout/Landing.vue';
import Posts from '../components/services/Posts.vue';

import AuthoriseCallback from '../components/oauth/AuthoriseCallback.vue';

import RopcLogin from '../components/ropc-auth/RopcLogin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) next('/posts');
      else next();
    }
  },
  {
    path: '/oauth/authorise',
    name: 'AuthoriseCallback',
    component: AuthoriseCallback
  },
  {
    path: '/ropc-login',
    name: 'RopcLogin',
    component: RopcLogin,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) next('/posts');
      else next();
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    beforeEnter: (to, from, next) => {
      if (localStorage.token) next();
      else next('/ropc-login');
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
