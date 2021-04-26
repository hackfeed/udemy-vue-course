import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList.vue";
import NotFound from "./pages/NotFound.vue";
import { defineAsyncComponent } from "vue";
import store from "./store/index.js";

const CoachDetail = defineAsyncComponent(() => {
  import("./pages/coaches/CoachDetail.vue");
});
const CoachRegistration = defineAsyncComponent(() => {
  import("./pages/coaches/CoachRegistration.vue");
});
const ContactCoach = defineAsyncComponent(() => {
  import("./pages/requests/ContactCoach.vue");
});
const RequestsReceived = defineAsyncComponent(() => {
  import("./pages/requests/RequestsReceived.vue");
});
const UserAuth = defineAsyncComponent(() => {
  import("./pages/auth/UserAuth.vue");
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true, requiresNoCoach: true },
    },
    { path: "/requests", component: RequestsReceived, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else if (to.meta.requiresNoCoach && store.getters["coaches/isCoach"]) {
    next("/requests");
  } else {
    next();
  }
});

export default router;
