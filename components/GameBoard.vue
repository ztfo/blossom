<template lang="pug">
div.game-board.text-center.py-8
  h2.text-2xl.font-semibold.mb-6 {{ currentWord.word }}
  div(v-for="(option, index) in currentWord.options" :key="index" class="flex justify-center flex-wrap space-x-4 mb-4")
    button(@click="checkAnswer(option)" class="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600") {{ option }}
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
