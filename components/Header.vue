<template lang="pug">
.header
    button(@click="goToMainMenu") Main Menu
    button(@click="restartGame") Restart
</template>

<script setup>
const restartGame = () => {
    // Logic to restart the game, such as resetting state
};

const goToMainMenu = () => {
    navigateTo('/');
};
</script>

<style lang="scss">

</style>