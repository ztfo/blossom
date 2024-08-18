<template lang="pug">
div.header.flex.justify-between.bg-gray-800.text-white.p-4
  button(@click="goToMainMenu" class="bg-blue-500 py-2 px-4 rounded shadow-lg hover:bg-blue-600") Main Menu
  button(@click="restartGame" class="bg-red-500 py-2 px-4 rounded shadow-lg hover:bg-red-600") Restart
</template>

<script setup>
const emit = defineEmits(["menu", "restart"]);

const goToMainMenu = () => {
  emit("menu");
};

const restartGame = () => {
  emit("restart");
};
</script>
