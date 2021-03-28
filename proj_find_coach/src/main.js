import App from "./App.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import { createApp } from "vue";
import router from "./router";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);

app.mount("#app");
