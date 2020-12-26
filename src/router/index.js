import Vue from 'vue';
import VueRouter from 'vue-router';

import PageHome from '../pages/PageHome.vue';
import PageAbout from '../pages/PageAbout.vue';
import PageUsers from '../pages/PageUsers';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: PageHome },
    { path: '/about', component: PageAbout },
    { path: '/members', component: PageUsers },
  ],
});

export default router;
