import counterActions from "./actions.js";
import counterGetters from "./getters.js";
import counterMutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
