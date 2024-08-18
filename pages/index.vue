<template>
    <MainMenu @start="startGame" />
  </template>
  
  <script setup>
  import MainMenu from '~/components/MainMenu.vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const startGame = (difficulty) => {
    router.push({ path: '/game', query: { difficulty } })
  }
  </script>