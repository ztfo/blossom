<template lang="pug">
  div
    h1 Blossom Game
    div(v-if="currentWord")
      p.word {{ currentWord.word }}
      div.choices
        button(
          v-for="(option, index) in currentWord.options"
          :key="index"
          @click="checkAnswer(option)"
          :class="{'correct': option === correctAnswer && showFeedback, 'wrong': option !== correctAnswer && showFeedback}"
        ) {{ option }}
    p(v-if="showFeedback" :class="feedbackClass") {{ feedbackMessage }}
    button(v-if="gameOver" @click="resetGame") Play Again
</template>

<script setup>
import { ref } from 'vue'

// todo: split into separate file
const words = ref([
  { "word": "bloss_m", "correctAnswer": "o", "options": ["a", "e", "i", "o"] },
  { "word": "bac_n", "correctAnswer": "o", "options": ["a", "e", "o", "u"] },
  { "word": "tex_s", "correctAnswer": "a", "options": ["a", "e", "i", "o"] },
  { "word": "lem_n", "correctAnswer": "o", "options": ["a", "e", "i", "o"] },
  { "word": "sof_", "correctAnswer": "a", "options": ["a", "e", "i", "o"] },
  { "word": "penc_l", "correctAnswer": "i", "options": ["a", "e", "i", "o"] },
  { "word": "probl_m", "correctAnswer": "e", "options": ["a", "e", "i", "o"] },
  { "word": "circ_s", "correctAnswer": "u", "options": ["a", "e", "i", "u"] },
  { "word": "seld_m", "correctAnswer": "o", "options": ["a", "e", "i", "o"] },
  { "word": "cust_m", "correctAnswer": "o", "options": ["a", "e", "i", "o"] },
  { "word": "sal_d", "correctAnswer": "a", "options": ["a", "e", "i", "o"] },
  { "word": "doz_n", "correctAnswer": "e", "options": ["a", "e", "i", "o"] },
])

const currentWordIndex = ref(0)
const currentWord = ref(words.value[currentWordIndex.value])
const showFeedback = ref(false)
const feedbackMessage = ref("")
const feedbackClass = ref("")
const correctAnswer = ref(currentWord.value.correctAnswer)
const gameOver = ref(false)

const checkAnswer = (selectedOption) => {
  showFeedback.value = true
  if (selectedOption === correctAnswer.value) {
    feedbackMessage.value = "Correct!"
    feedbackClass.value = "feedback-correct"
    nextWord()
  } else {
    feedbackMessage.value = "Try Again!"
    feedbackClass.value = "feedback-wrong"
  }
}

const nextWord = () => {
  setTimeout(() => {
    showFeedback.value = false
    if (currentWordIndex.value < words.value.length - 1) {
      currentWordIndex.value++
      currentWord.value = words.value[currentWordIndex.value]
      correctAnswer.value = currentWord.value.correctAnswer
    } else {
      gameOver.value = true
    }
  }, 1000)
}

const resetGame = () => {
  currentWordIndex.value = 0
  currentWord.value = words.value[currentWordIndex.value]
  correctAnswer.value = currentWord.value.correctAnswer
  feedbackMessage.value = ""
  showFeedback.value = false
  gameOver.value = false
}
</script>

<style scoped>
.word {
  font-size: 2em;
  margin-bottom: 20px;
}
.choices {
  display: flex;
  gap: 10px;
}
button {
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
}
.feedback-correct {
  color: green;
}
.feedback-wrong {
  color: red;
}
.correct {
  background-color: lightgreen;
}
.wrong {
  background-color: lightcoral;
}
</style>