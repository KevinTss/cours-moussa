import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import  BootstrapVue from 'bootstrap-vue'


import App from './App.vue';
import PageHome from './pages/PageHome.vue';
import PageAbout from './pages/PageAbout.vue';
//import PageAnnounces from './pages/PageUsers.vue';
import PageUsers from "./pages/PageUsers";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    { path: '/', component: PageHome },
    { path: '/about', component: PageAbout },
    { path: '/members', component: PageUsers },

  ],
});

const store = new Vuex.Store({
  state: {
    authUser: null,
    users: [],
  },
  mutations: {
    addUser: (state) => {
      state.users = ['kevin', 'Paul'];
    },
    setAuthUser: (state, user) => {
      state.authUser = user;
    },
  },
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount('#app');
