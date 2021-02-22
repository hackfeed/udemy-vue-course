const app = Vue.createApp({
  data() {
    return {
      name: "Sergey",
      age: 20,
      imageUrl: "https://hackfeed.github.io/assets/img/photo.jpg",
    };
  },
  methods: {
    changeAge(years) {
      return this.age + years;
    },
    getFavoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
