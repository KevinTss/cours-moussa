import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import PageHome from './PageHome.vue';
import PageAbout from './PageAbout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: PageHome },
    { path: '/about', component: PageAbout },
  ],
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');
