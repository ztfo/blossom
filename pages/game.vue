<template lang="pug">
    div
      GameControls(:difficulty="difficulty")
</template>

<script setup>
import GameControls from '~/components/GameControls.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const difficulty = route.query.difficulty || 'easy';
</script>