import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import { createApp } from "vue";

createApp(App)
  .component("friend-contact", FriendContact)
  .mount("#app");
