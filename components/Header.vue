<template lang="pug">
.header
    button(@click="goToMainMenu") Menu
    button(@click="restartGame") Restart
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
