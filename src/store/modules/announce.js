import queryString from 'query-string';
import API from '../../api';
import {
  initialLoadingState,
  setLoadingState,
  setSuccessState,
  setErrorState,
  setActionStatus,
} from '../utils';

const initialPaginationState = {
  totalPage: 0,
  current: null,
  perPage: null,
};

const storeAnnounce = {
  namespaced: true,
  state: {
    list: [],
    paginationList: { ...initialPaginationState },
    myList: [],
    paginationMyList: { ...initialPaginationState },
    currentId: null,
    actions: {
      search: { ...initialLoadingState },
      create: { ...initialLoadingState },
      fetchAll: { ...initialLoadingState },
      fetchOne: { ...initialLoadingState },
    },
  },
  getters: {
    getAnnounces(state) {
      return state.list;
    },
    getMyAnnounces(state) {
      return state.myList;
    },
    getAnnouncesPagination(state) {
      return state.paginationList;
    },
    getMyAnnouncesPagination(state) {
      return state.paginationMyList;
    },
    isCreateLoading(state) {
      return state.actions.create.loading;
    },
    isCreateError(state) {
      return state.actions.create.error;
    },
    getCurrentAnnounce(state) {
      return state.list.find((a) => a.id === state.currentId);
    },
    isCurrentAnnounceLoading(state) {
      return state.actions.fetchOne.loading;
    },
  },
  mutations: {
    setActionStatus,
    setAnnounces: (state, newAnnounces) => {
      state.list = newAnnounces;
    },
    setAnnouncesPagination: (state, newValue) => {
      state.paginationList = newValue;
    },
    setMyAnnounces: (state, newAnnounces) => {
      state.myList = newAnnounces;
    },
    setMyAnnouncesPagination: (state, newValue) => {
      state.paginationMyList = newValue;
    },
    setCurrentAnnounce: (state, announce) => {
      const newList = state.list;
      newList.push(announce);
      state.list = newList;
      state.currentId = announce.id;
    },
    reset: (state) => {
      state.list = [];
      state.myList = [];
      state.paginationList = { ...initialPaginationState };
      state.paginationMyList = { ...initialPaginationState };
      state.actions = {
        search: { ...initialLoadingState },
        create: { ...initialLoadingState },
        fetchAll: { ...initialLoadingState },
      };
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    search: (store, filters = {}) => {
      setLoadingState(store, 'search');
      const qs = queryString.stringify({
        per_page: 10,
        // 'filter[vehicle_fuel]': filters.fuel,
        // 'filter[vehicle_first_traffic_year]': filters.year,
        // 'filter[gearbox]': filters.transmission,
        // 'filter[model_id]': filters.modelId,
        // 'filter[brand_id]': filters.brandId,
      });

      API.get(`announce_cars?${qs}`)
        .then((response) => {
          setSuccessState(store, 'search');
          const announces = response.data.data.announces.data;
          console.log(response.data.data);
          store.commit('setAnnounces', announces);
          store.commit('setAnnouncesPagination', {
            totalPage: response.data.data.announces.last_page,
            current: response.data.data.announces.current_page,
            perPage: response.data.data.announces.per_page,
          });
        })
        .catch((e) => {
          setErrorState(store, 'search', e.message);
        });
    },
    create: (store) => {
      setLoadingState(store, 'create');
      const formData = store.rootGetters['form/getCreateAnnounceFromData'];
      API.post('owner_vehicles', {
        gearbox: formData.transmission,
        model_car_id: formData.modelId,
        vehicle_fuel: formData.fuel,
        vehicle_body: formData.body,
        // brandId: null,
        // year: null,
        // month: null,
        // kw: null,
        // serialId: null,
        // other: null,
        // equipments: [],
        // priceBrut: 0,
        // vat: null,
        // title: null,
        // description: null,
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
    fetchAll: (store) => {
      const userId = store.rootGetters['auth/getAuthUser'].id;
      API.get(`users/${userId}/announce_cars`)
        .then((response) => {
          console.log('++++', response);
          // const announces = response.data.data.items;
          // console.log('+', response.data);
          // store.commit('setMyAnnounces', announces);
          // store.commit('setMyAnnouncesPagination', {
          //   totalPage: response.data.data.announces.last_page,
          //   current: response.data.data.announces.current_page,
          //   perPage: response.data.data.announces.per_page,
          // });
        })
        .catch((e) => {
          // setErrorState(store, 'create', e.message);
          console.log('err', e.message);
        });
    },
    fetchOne: (store, announceId) => {
      API.get(`announce_cars/${announceId}`)
        .then((response) => {
          const announce = response.data.data.item;
          console.log('+', announce);
          store.commit('setCurrentAnnounce', announce);
        })
        .catch((e) => {
          // setErrorState(store, 'create', e.message);
          console.log('err', e.message);
        });
    },
  },
};

export default storeAnnounce;
