const app = Vue.createApp({
  data() {
    return {
      currentResult: 0,
      expectedResult: 37,
      messageLess: "Not there yet!",
      messageMore: "Too much!",
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.currentResult = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.currentResult < this.expectedResult) {
        return this.messageLess;
      }
      if (this.currentResult > this.expectedResult) {
        return this.messageMore;
      }
      return this.currentResult;
    },
  },
  methods: {
    add(num) {
      this.currentResult += num;
    },
  },
});

app.mount("#assignment");
