import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import { createApp } from "vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
