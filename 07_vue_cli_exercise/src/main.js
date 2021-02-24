import ActiveUser from "./components/ActiveUser.vue";
import App from "./App.vue";
import UserData from "./components/UserData.vue";
import { createApp } from "vue";

const app = createApp(App);

app.component("active-user", ActiveUser);
app.component("user-data", UserData);

app.mount("#app");
