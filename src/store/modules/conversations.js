import API from '../../api';
import {
  initialLoadingState,
  setLoadingState,
  setSuccessState,
  setErrorState,
  setActionStatus,
} from '../utils';

const storeModel = {
  namespaced: true,
  state: {
    list: [],
    currentId: null,
    actions: {
      fetchAll: { ...initialLoadingState },
      create: { ...initialLoadingState },
      fetchCurrentChat: { ...initialLoadingState },
    },
  },
  getters: {
    getAll(state) {
      return state.list;
    },
    isGetAllLoading(state) {
      return state.actions.fetchAll.loading;
    },
    isGetAllSuccess(state) {
      return state.actions.fetchAll.success;
    },
    isGetAllError(state) {
      return state.actions.fetchAll.error;
    },
    getCurrentConversation(state) {
      return state.list.find((c) => c.id === state.currentId);
    },
  },
  mutations: {
    setActionStatus,

    setAll(state, newConversations) {
      state.list = newConversations;
    },
    setCurrentChat(state, currentConversation) {
      state.list = currentConversation;
    },
    reset(state) {
      state.list = [];
    },
  },
  actions: {
    fetchAll(store) {
      setLoadingState(store, 'fetchAll');
      API.get('chats')
        .then((response) => {
          store.commit('setAll', response.data.data.items);
          setSuccessState(store, 'fetchAll');
        })
        .catch((e) => {
          setErrorState(store, 'fetchAll', e.message);
        });
    },
    create(store, announceId) {
      setLoadingState(store, 'create');
      API.post('chats', {
        announce_car_id: announceId,
      })
        .then((response) => {
          console.log('res', response);
          // store.commit('setOne', response.data.data.items);
          setSuccessState(store, 'create');
        })
        .catch((e) => {
          setErrorState(store, 'create', e.message);
        });
    },
    /*createMessage(store, message) {
      setLoadingState(store, 'createMessage');

      API.post('chats/${chat}', {
        message: this.message
      })
    }*/
    fetchCurrentChat(store) {
      setLoadingState(store, 'fetchCurrentChat');
      API.get('chats/${chatId}').then((response) => {
        console.log('eee', response);
        //store.commit('setCurrentChat', response);
      });
    },
  },
};

export default storeModel;
