<template lang="pug">
.main-menu
  p Select Difficulty:
  button(@click="start('easy')") Easy
  button(@click="start('medium')") Medium
  button(@click="start('hard')") Hard
</template>

<script setup>
const emit = defineEmits(["start"]);

const start = (difficulty) => {
  emit("start", difficulty);
};
</script>

<style lang="scss">
</style>