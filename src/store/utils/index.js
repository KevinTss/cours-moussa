export const initialLoadingState = {
  loading: false,
  success: false,
  error: '',
};

/**
 * Set loading state
 *
 * This function will set the state inside the store.action.*actionnName*
 * with the `loading` to `true`
 *
 * @param {object} store The store object
 * @param {string} actionName The name of action
 * @return {undefined}
 */
export function setLoadingState(store, actionName) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: true,
    success: false,
    error: '',
  });
}

export function setSuccessState(store, actionName) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: false,
    success: true,
    error: '',
  });
}

export function setErrorState(store, actionName, message) {
  store.commit('setActionStatus', {
    actionName: actionName,
    loading: false,
    success: false,
    error: message,
  });
}

export const setActionStatus = (state, data) => {
  state.actions[data.actionName].loading = data.loading;
  state.actions[data.actionName].success = data.success;
  state.actions[data.actionName].error = data.error;
};
