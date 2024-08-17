<template lang="pug">
    div.main-menu
      h1 Welcome to the Blossom Game
      p Pick a difficulty level:
      DifficultyButton(v-for="level in levels" :key="level" @click="startGame(level)" :label="level")
</template>

<script setup>
import DifficultyButton from '~/components/DifficultyButton.vue';

const levels = ['Easy', 'Medium', 'Hard'];

const startGame = (difficulty) => {
    navigateTo(`/game?difficulty=${difficulty.toLowerCase()}`);
};
</script>

<style lang="scss">
</style>