import coachesModule from "./modules/coaches/index.js";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
