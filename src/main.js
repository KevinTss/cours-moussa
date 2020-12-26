import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import API from './api';
import App from './App.vue';
import router from './router';

Vue.use(Vuex);
Vue.use(BootstrapVue);

const initialState = {
  authUser: null,
  users: [],
};

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    setUsers: (state, newUsers) => {
      state.users = newUsers;
    },
    setAuthUser: (state, user) => {
      state.authUser = user;
    },
    setInitialState: (state) => {
      state.authUser = null;
      state.users = [];
      window.localStorage.removeItem('token');
    },
  },
  actions: {
    fetchUsers: (store) => {
      API.get('users')
        .then((response) => {
          store.commit('setUsers', response.data.data.data);
        })
        .catch((e) => console.log('Error: ', e.message));
      store.commit('setUsers', []);
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
