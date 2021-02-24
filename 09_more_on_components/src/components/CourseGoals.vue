<template>
  <ul>
    <li :key="goal" v-for="goal in goals">
      <slot :item="goal" :goal="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
