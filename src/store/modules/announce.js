import queryString from 'query-string';
import API from '../../api';

const storeAnnounce = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    getAllAnnounces(state) {
      return state.list;
    },
  },
  mutations: {
    setAnnounces: (state, newAnnounces) => {
      state.list = newAnnounces;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    search: (store, filters = {}) => {
      const qs = queryString.stringify({
        // 'filter[vehicle_fuel]': filters.fuel,
        // 'filter[vehicle_first_traffic_year]': filters.year,
        // 'filter[gearbox]': filters.transmission,
        // 'filter[model_id]': filters.modelId,
        // 'filter[brand_id]': filters.brandId,
      });

      API.get(`announce_cars?${qs}`)
        .then((response) => {
          store.commit('setAnnounces', response.data.data.announces.data);
        })
        .catch((e) => {
          console.log('Error: ', e.message);
        });
    },
    create: (store, data) => {
      console.log('data', data, store);
      API.post(`owner_vehicles`, {
        gearbox: data.transmission,
        model_car_id: data.modelId,
      })
        .then((response) => {
          console.log('okok', response);
          // store.commit('setAnnounces', response.data.data.announces.data);
        })
        .catch((e) => {
          console.log('Error: ', e.message);
        });
    },
  },
};

export default storeAnnounce;
