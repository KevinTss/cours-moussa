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
    fetchModels(store, brandId) {
      API.get(`brand_cars/${brandId}/model_cars`)
        .then((response) => {
          store.commit('setModels', response.data);
        })
        .catch((e) => console.log('Error: ', e.message));
    },
  },
};

export default storeModel;
