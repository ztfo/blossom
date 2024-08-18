<template lang="pug">
div.main-menu.text-center.py-8
  p.text-lg.mb-4 Pick a difficulty level:
  div.flex.justify-center.space-x-4
    button(@click="start('easy')" class="bg-blue-500 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-600") Easy
    button(@click="start('medium')" class="bg-yellow-500 text-white py-2 px-4 rounded shadow-lg hover:bg-yellow-600") Medium
    button(@click="start('hard')" class="bg-red-500 text-white py-2 px-4 rounded shadow-lg hover:bg-red-600") Hard
</template>

<script setup>
const emit = defineEmits(["start"]);

const start = (difficulty) => {
  emit("start", difficulty);
};
</script>

<style lang="scss">
</style>