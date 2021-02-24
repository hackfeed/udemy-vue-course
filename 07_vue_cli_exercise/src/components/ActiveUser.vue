<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ age }} years</h3>
  </div>
</template>

<script>
export default {
  props: ["username", "age"],
};
</script>
