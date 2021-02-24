import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";
import { createApp } from "vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
