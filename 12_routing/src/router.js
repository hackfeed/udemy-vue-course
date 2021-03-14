import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./components/nav/NotFound.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import UsersList from "./components/users/UsersList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [{ name: "team-members", path: ":teamId", component: TeamMembers, props: true }],
    },
    { path: "/users", components: { default: UsersList, footer: UsersFooter } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
