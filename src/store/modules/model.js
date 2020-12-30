import API from '../../api';

const storeModel = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    getAllModels(state) {
      return state.list;
    },
  },
  mutations: {
    setModels(state, newModels) {
      state.list = newModels;
    },
  },
  actions: {
    fetchModels(store) {
      // const brandId = store.rootGetters["form/getCreateAnnounceFromData"].brandId
      // const year = store.rootGetters["form/getCreateAnnounceFromData"].year
      // const fuel = store.rootGetters["form/getCreateAnnounceFromData"].fuel
      const { brandId, year, fuel } = store.rootGetters[
        'form/getCreateAnnounceFromData'
      ];
      let endpoint = `brand_cars/${brandId}/model_cars`;
      if (year || fuel) {
        endpoint += '?';
        year && (endpoint += `year=${year}`);
        year && fuel && (endpoint = +'&');
        fuel && (endpoint += `fuel=${fuel}`);
      }

      API.get(endpoint)
        .then((response) => {
          store.commit('setModels', response.data.data.models);
        })
        .catch((e) => console.log('Error: ', e.message));
    },
  },
};

export default storeModel;
