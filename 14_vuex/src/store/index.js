import counterModule from "./modules/counter/index.js";
import { createStore } from "vuex";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import rootMutations from "./mutations.js";

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
