<template lang="pug">
.game
    Header(@menu="goToMainMenu" @restart="restartGame")
    GameBoard(:difficulty="difficulty" @gameOver="handleGameOver")
</template>

<script setup>
import Header from "~/components/Header.vue";
import GameBoard from "~/components/GameBoard.vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const difficulty = ref(route.query.difficulty || "easy");

const goToMainMenu = () => {
  router.push("/");
};

const restartGame = () => {
  router.replace({ path: "/game", query: { difficulty: difficulty.value } });
};

const handleGameOver = () => {};
</script>
