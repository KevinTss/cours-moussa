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
      other: null,
      body: null,
    },
    searchQuickAnnounce: {
      modelId: null,
      brandId: null,
      year: null,
    },
  },
  getters: {
    getCreateAnnounceFromData(state) {
      return state.createAnnounce;
    },
    getAnnounceFromSearchData(state) {
      return state.searchQuickAnnounce;
    },
  },
  mutations: {
    setAnnounceFormField(state, data) {
      state.createAnnounce[data.name] = data.value;
    },
    setSearchFormField(state, data) {
      state.searchQuickAnnounce[data.name] = data.value;
    },
  },
  actions: {
    changeCreateAnnounceField(store, data) {
      const array = Array.isArray(data) ? data : [data];
      array.forEach((singleData) => {
        store.commit("setAnnounceFormField", singleData);
      });
    },
    changeSearchQuickAnnounce(store, data) {
      const array = Array.isArray(data) ? data : [data];
      array.forEach((singleData) => {
        store.commit("setSearchFormField", singleData);
      });
    },

    reset(store, fields) {
      if (fields) {
        const fieldsToRemove = fields.map((field) => ({
          name: field,
          value: null,
        }));
        store.dispatch("changeCreateAnnounceField", fieldsToRemove);
      } else {
        store.dispatch("changeCreateAnnounceField", [
          { name: "brandId", value: null },
          { name: "year", value: null },
          { name: "month", value: null },
          { name: "fuel", value: null },
          { name: "modelId", value: null },
          { name: "kw", value: null },
          { name: "transmission", value: null },
          { name: "serialId", value: null },
          { name: "body", value: null },
          { name: "other", value: null },
        ]);
      }
    },
  },
};

export default storeModel;
