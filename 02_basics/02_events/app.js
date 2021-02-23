const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    // name(value) {
    //   this.fullname = `${value} Kononenko`;
    // },
    counter(value) {
      if (value < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return `${this.name} ${this.lastName}`;
    },
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
