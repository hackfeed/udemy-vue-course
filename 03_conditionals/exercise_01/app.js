const app = Vue.createApp({
  data() {
    return {
      taskName: "",
      taskList: [],
      showTaskList: true,
    };
  },
  computed: {
    buttonContent() {
      if (this.showTaskList) {
        return "Hide";
      }
      return "Show";
    },
  },
  methods: {
    addTask() {
      this.taskList.push(this.taskName);
    },
    manageTaskListView() {
      this.showTaskList = !this.showTaskList;
    },
  },
});

app.mount("#assignment");
