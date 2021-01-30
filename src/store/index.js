import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router';
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
  actions: {
    logout(store) {
      window.localStorage.removeItem('token');
      store.commit('announce/reset');
      store.commit('auth/reset');
      store.commit('brand/reset');
      store.commit('equipment/reset');
      store.commit('form/reset');
      store.commit('model/reset');
      store.commit('serial/reset');
      router.push({ name: 'login-page' });
    },
  },
});

export default store;
