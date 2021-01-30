import API from '../../api';

const storeBrand = {
  namespaced: true,
  state: {
    list: [],
    isFetching: false,
  },
  getters: {
    getAllBrands(state) {
      return state.list;
    },
    getIsAllBrandsFetching(state) {
      return state.isFetching;
    },
  },
  mutations: {
    setBrandCars: (state, brands) => {
      state.list = brands;
    },
    setIsFetching(state, newValue) {
      state.isFetching = newValue;
    },
    reset(state) {
      state.list = [];
      state.isFetching = false;
    },
  },
  actions: {
    fetchBrands: (store) => {
      store.commit('setIsFetching', true);
      API.get('brand_cars')
        .then((response) => {
          store.commit('setBrandCars', response.data.data.items);
          store.commit('setIsFetching', false);
        })
        .catch((e) => {
          console.log('Error: ', e.message);
          store.commit('setIsFetching', false);
        });
    },
  },
};

export default storeBrand;
