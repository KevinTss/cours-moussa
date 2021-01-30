import queryString from 'query-string';
import API from '../../api';

function setLoadingState(store, actionName) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: true,
    success: false,
    error: '',
  });
}
function setSuccessState(store, actionName) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: false,
    success: true,
    error: '',
  });
}
function setErrorState(store, actionName, message) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: false,
    success: false,
    error: message,
  });
}

const storeAnnounce = {
  namespaced: true,
  state: {
    list: [],
    actions: {
      search: {
        loading: false,
        success: false,
        error: '',
      },
      create: {
        loading: false,
        success: false,
        error: '',
      },
    },
  },
  getters: {
    getAllAnnounces(state) {
      return state.list;
    },
    isCreateLoading(state) {
      return state.actions.create.loading;
    },
    isCreateError(state) {
      return state.actions.create.error;
    },
  },
  mutations: {
    setAnnounces: (state, newAnnounces) => {
      state.list = newAnnounces;
    },
    setActionStatus: (state, data) => {
      state.actions[data.actionName].loading = data.loading;
      state.actions[data.actionName].success = data.success;
      state.actions[data.actionName].error = data.error;
    },
    reset: (state) => {
      state.list = [];
      state.actions = {
        search: {
          loading: false,
          success: false,
          error: '',
        },
        create: {
          loading: false,
          success: false,
          error: '',
        },
      };
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    search: (store, filters = {}) => {
      setLoadingState(store, 'search');
      const qs = queryString.stringify({
        // 'filter[vehicle_fuel]': filters.fuel,
        // 'filter[vehicle_first_traffic_year]': filters.year,
        // 'filter[gearbox]': filters.transmission,
        // 'filter[model_id]': filters.modelId,
        // 'filter[brand_id]': filters.brandId,
      });

      API.get(`announce_cars?${qs}`)
        .then((response) => {
          setSuccessState(store, 'search');
          store.commit('setAnnounces', response.data.data.announces.data);
        })
        .catch((e) => {
          setErrorState(store, 'search', e.message);
        });
    },
    create: (store, data) => {
      setLoadingState(store, 'create');
      API.post('owner_vehicles', {
        gearbox: data.transmission,
        model_car_id: data.modelId,
      })
        .then((response) => {
          console.log('okok', response);
          setSuccessState(store, 'create');
          // store.commit('setAnnounces', response.data.data.announces.data);
        })
        .catch((e) => {
          setErrorState(store, 'create', e.message);
        });
    },
  },
};

export default storeAnnounce;
