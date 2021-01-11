import queryString from 'query-string';
import API from '../../api';

const storeModel = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    getAllSerials(state) {
      return state.list;
    },
  },
  mutations: {
    setSerials(state, newSerials) {
      state.list = newSerials;
    },
  },
  actions: {
    fetchSerials(store) {
      const {
        brandId,
        modelId,
        fuel,
        year,
        kw,
        transmission,
      } = store.rootGetters['form/getCreateAnnounceFromData'];
      let endpoint = `brand_cars/${brandId}/model_cars/${modelId}/version_frances`;

      const qs = queryString.stringify({
        'filter[year]': year,
        'filter[fuel]': fuel,
        'filter[power_cv]': kw,
        'filter[gearbox]': transmission,
      });

      API.get(`${endpoint}?${qs}`)
        .then((response) => {
          store.commit('setSerials', response.data.data.version_car);
        })
        .catch((e) => console.log('Error: ', e.message));
    },
  },
};

export default storeModel;
