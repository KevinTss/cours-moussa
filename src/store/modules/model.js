import API from '../../api';
import queryString from 'query-string';

const storeModel = {
  namespaced: true,
  state: {
    list: [],
    isGetAllFetching: false,
  },
  getters: {
    getAllModels(state) {
      return state.list;
    },
    getIsAllModelsFetching(state) {
      return state.isGetAllFetching;
    },
  },
  mutations: {
    setModels(state, newModels) {
      state.list = newModels;
    },
    setIsGetAllFetching(state, newValue) {
      state.isGetAllFetching = newValue;
    },
  },
  actions: {
    fetchModels(store) {
      store.commit('setIsGetAllFetching', true);
      // const brandId = store.rootGetters["form/getCreateAnnounceFromData"].brandId
      // const year = store.rootGetters["form/getCreateAnnounceFromData"].year
      // const fuel = store.rootGetters["form/getCreateAnnounceFromData"].fuel
      const { brandId, year, fuel } = store.rootGetters[
        'form/getCreateAnnounceFromData'
      ];

      const qs = queryString.stringify({
        year: year,
        fuel: fuel,
      });

      let endpoint = `brand_cars/${brandId}/model_cars?${qs}`;

      API.get(endpoint)
        .then((response) => {
          let data = response.data.data.models;
          if (!Array.isArray(data)) {
            data = Object.values(data);
          }
          store.commit('setModels', data);
          store.commit('setIsGetAllFetching', false);
        })
        .catch((e) => {
          store.commit('setIsGetAllFetching', false);
          console.log('Error: ', e.message);
        });
    },
  },
};

export default storeModel;
