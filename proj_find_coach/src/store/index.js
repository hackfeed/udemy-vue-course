import coachesModule from "./modules/coaches/index.js";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
