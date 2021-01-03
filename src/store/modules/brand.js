import API from '../../api';

const storeBrand = {
  namespaced: true,
  state: {
    list: [],
    isFetching: false,
    // todos: [
    //   { id: 1, text: '...', status: "pending" },
    //   { id: 2, text: '...', status: "done" }
    // ]
  },
  getters: {
    getAllBrands(state) {
      return state.list;
    },
    getIsAllBrandsFetching(state) {
      return state.isFetching;
    },
    // getDoneTodos: ({todos}) => todos.filter(({status}) => status === "done")
    // getDoneTodos: function(state) {
    //   return state.todos.filter(function(todo) {
    //     return todo.status === 'done';
    //   });
    // },
  },
  mutations: {
    setBrandCars: (state, brands) => {
      state.list = brands;
    },
    setIsFetching(state, newValue) {
      state.isFetching = newValue;
    },
  },
  actions: {
    fetchBrands: (store) => {
      // store.commit('setBrandCars', [
      //   { id: 1, name: 'aaa' },
      //   { id: 2, name: 'bbb' },
      //   { id: 3, name: 'ccc' },
      //   { id: 4, name: 'ddd' },
      // ]);
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
