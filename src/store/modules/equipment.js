import API from '../../api';

const storeModel = {
  namespaced: true,
  state: {
    list: [],
  },
  getters: {
    getAllEquipment(state) {
      return state.list;
    },
  },
  mutations: {
    setEquipments(state, newEquipments) {
      state.list = newEquipments;
    },
  },
  actions: {
    fetchEquipments(store) {
      API.get('equipment_cars')
        .then((response) => {
          store.commit('setEquipments', response.data.data.items);
        })
        .catch((e) => console.log('Error: ', e.message));
    },
  },
};

export default storeModel;
