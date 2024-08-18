<template lang="pug">
.game-board
  h2 {{ currentWord.word }}
  div.choices
    button(v-for="(option, index) in currentWord.options" :key="index" @click="checkAnswer(option)") {{ option }}
  p(v-if="showFeedback") {{ feedbackMessage }}
</template>

<script setup>
import { ref } from "vue";
import words from "~/data/words.json";

const props = defineProps(["difficulty"]);

const currentWordIndex = ref(0);
const currentWord = ref(words[props.difficulty][currentWordIndex.value]);
const showFeedback = ref(false);
const feedbackMessage = ref("");

const checkAnswer = (option) => {
  showFeedback.value = true;
  if (option === currentWord.value.correctAnswer) {
    feedbackMessage.value = "Correct!";
    nextWord();
  } else {
    feedbackMessage.value = "Wrong! Try again!";
  }
};

const nextWord = () => {
  setTimeout(() => {
    showFeedback.value = false;
    currentWordIndex.value++;
    if (currentWordIndex.value >= words[props.difficulty].length) {
      currentWordIndex.value = 0; // Reset game if it's over
    }
    currentWord.value = words[props.difficulty][currentWordIndex.value];
  }, 1000);
};
</script>
