const app = Vue.createApp({
  data() {
    return {
      fparStyle: "",
      sparStyle: "",
      isVisible: true,
    };
  },
  methods: {
    fetchFirstParStyle(event) {
      this.fparStyle = event.target.value;
    },
    fetchSecondParStyle(event) {
      this.sparStyle = event.target.value;
    },
    toggleStyle() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
