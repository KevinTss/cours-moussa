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
const brands = [];

const store = new Vuex.Store({
  state: {
    initialState, brands
  },
  mutations: {
    setUsers: (state, newUsers) => {
      state.initialState.users = newUsers;
    },
    setAuthUser: (state, user) => {
      console.log(state.initialState.authUser)
      state.initialState.authUser = user;
    },
    setInitialState: (state) => {
      state.initialState.authUser = null;
      state.initialState.users = [];
      window.localStorage.removeItem('token');
    },
    setBrandCars: (state, brands) => {
      state.brands = brands
    }
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
    fetchBrands: (store) => {
      API.get('brand_cars')
          .then((response) => {
            console.log(response.data.data.brands)
        store.commit('setBrandCars',response.data.data.brands)
      })
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
