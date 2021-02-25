import App from "./App.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import { createApp } from "vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
