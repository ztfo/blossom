<template lang="pug">
.header
    button(@click="goToMainMenu") Main Menu
    button(@click="restartGame") Restart Game
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
