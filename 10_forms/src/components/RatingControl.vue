<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'rich' }">
      <button type="button" @click="activate('rich')">Rich</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(202, 0, 202);
}

.active button {
  color: rgb(255, 0, 255);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
