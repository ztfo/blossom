<template lang="pug">
div.game-board
    h2 {{ currentWord.word }}
    div.choices
    button(
        v-for="(option, index) in currentWord.options"
        :key="index"
        @click="checkAnswer(option)"
    ) {{ option }}
</template>

<script setup>
import { ref } from 'vue';

const currentWord = ref({
    word: "example",
    correctAnswer: "e",
    options: ["a", "e", "i", "o"]
});

const checkAnswer = (selectedOption) => {
// Logic to check answer
};
</script>