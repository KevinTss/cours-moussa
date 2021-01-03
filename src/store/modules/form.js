const storeModel = {
  namespaced: true,
  state: {
    createAnnounce: {
      brandId: null,
      year: null,
      month: null,
      fuel: null,
      modelId: null,
      kw: null,
      transmission: null,
      serialId: null,
      body:null,
    },
  },
  getters: {
    getCreateAnnounceFromData(state) {
      return state.createAnnounce;
    },
  },
  mutations: {
    setAnnounceFormField(state, data) {
      state.createAnnounce[data.name] = data.value;
    },
  },
  actions: {
    changeCreateAnnounceField(store, data) {
      store.commit('setAnnounceFormField', data);
    },
  },
};

export default storeModel;
