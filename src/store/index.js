import Vue from 'vue';
import Vuex from 'vuex';

import API from '../api';
import moduleModel from './modules/model';
import storeAnnounce from './modules/announce';
import storeAuth from './modules/auth';
import storeBrand from './modules/brand';
import storeEquipment from './modules/equipment';
import storeForm from './modules/form';
import storeSerial from './modules/serial';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    announce: storeAnnounce,
    auth: storeAuth,
    brand: storeBrand,
    equipment: storeEquipment,
    form: storeForm,
    model: moduleModel,
    serial: storeSerial,
  },
  state: {
    users: [],
  },
  mutations: {
    setUsers: (state, newUsers) => {
      state.users = newUsers;
    },
    setInitialState: () => {
      console.log('setInitialState');
      // state.authUser = null;
      // state.users = [];
      // state.brands = [];
      // window.localStorage.removeItem('token');
    },
  },
  actions: {
    fetchUsers: (store) => {
      API.get('users')
        .then((response) => {
          store.commit('setUsers', response.data.data.data);
        })
        .catch((e) => console.log('Error: ', e.message));
    },
    resetStore(store) {
      console.log('resetStore', store);
      store.commit('reset');
    },
    logout(store) {
      // window.localStorage.removeItem('token');
      store.dispatch('resetStore');
    },
  },
});

export default store;
