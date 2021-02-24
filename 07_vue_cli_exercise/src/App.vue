<template>
  <div>
    <active-user :username="activeUserName" :age="activeUserAge"></active-user>
    <user-data @change-user="changeActiveUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUserName: "Username",
      activeUserAge: "Age",
    };
  },
  methods: {
    changeActiveUser(newUserName, newUserAge) {
      this.activeUserName = newUserName;
      this.activeUserAge = +newUserAge;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

div {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
