<template>
    <div class="main-menu">
      <h1>Welcome to the Blossom Game</h1>
      <p>Select Difficulty:</p>
      <button @click="start('easy')">Easy</button>
      <button @click="start('medium')">Medium</button>
      <button @click="start('hard')">Hard</button>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['start'])
  
  const start = (difficulty) => {
    emit('start', difficulty)
  }
  </script>