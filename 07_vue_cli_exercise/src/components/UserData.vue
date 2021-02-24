<template>
  <form @submit.prevent="submitData">
    <label for="">Username</label>
    <input type="text" v-model="enteredUserName" />
    <label for="">Age</label>
    <input type="number" v-model="enteredAge" />
    <button>Change Active User</button>
  </form>
</template>

<script>
export default {
  emits: ["change-user"],
  data() {
    return {
      enteredUserName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("change-user", this.enteredUserName, this.enteredAge);
    },
  },
};
</script>
