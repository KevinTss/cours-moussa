import API from "../../api";
import router from "../../router";

const storeAuth = {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    getAuthUser(state) {
      return state.user;
    },
  },
  mutations: {
    setAuthUser: (state, user) => {
      state.user = user;
    },
    reset(state) {
      console.log("reset auth", state);
    },
  },
  actions: {
    login(store, data) {
      API.post("login", data)
        .then((res) => {
          const token = res.data.data.token;
          const user = res.data.data.user;

          window.localStorage.setItem("token", token);
          store.commit("setAuthUser", user);
          router.push("/");
        })
        .catch((error) => {
          console.log("err", error.message);
        });
    },
    register(store, data) {
      API.post("register", data)
        .then((res) => {
          const token = res.data.data.token;
          const user = res.data.data.user;

          window.localStorage.setItem("token", token);
          store.commit("setAuthUser", user);
        })
        .catch((error) => {
          console.log("err", error.message);
        });
    },
  },
};

export default storeAuth;
