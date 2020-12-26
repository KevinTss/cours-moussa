import Vue from 'vue';
import VueRouter from 'vue-router';

import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageUsers from '../pages/PageUsers';
import PageLogin from '../pages/PageLogin';
import PageRegister from '../pages/PageRegister';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: PageHome },
    { path: '/login', component: PageLogin },
    { path: '/register', component: PageRegister },
    { path: '/about', component: PageAbout },
    { path: '/members', component: PageUsers },
    { path: '*', redirect: '/' },
  ],
});

export default router;
