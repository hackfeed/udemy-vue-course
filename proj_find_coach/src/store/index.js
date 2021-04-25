import authModule from "./modules/auth/index.js";
import coachesModule from "./modules/coaches/index.js";
import { createStore } from "vuex";
import requestsModule from "./modules/requests/index.js";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
