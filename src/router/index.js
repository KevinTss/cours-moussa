import Vue from 'vue';
import VueRouter from 'vue-router';

import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageLogin from '../pages/PageLogin';
import PageRegister from '../pages/PageRegister';
import PageCreateAnnounce from '../pages/PageCreateAnnounce';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: PageHome, name: 'home-page' },
    { path: '/login', component: PageLogin, name: 'login-page' },
    { path: '/register', component: PageRegister, name: 'register-page' },
    { path: '/about', component: PageAbout, name: 'about-page' },
    {
      path: '/announces/new',
      component: PageCreateAnnounce,
      name: 'create-announce-page',
      meta: { requiresAuth: true },
    },
    { path: '*', redirect: '/' },
  ],
});

export default router;
