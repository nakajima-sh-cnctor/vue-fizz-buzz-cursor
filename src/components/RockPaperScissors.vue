<template>
  <div>
    <button class="gu" @click="play('ぐー')">ぐー</button>
    <button class="choki" @click="play('ちょき')">ちょき</button>
    <button class="pa" @click="play('ぱー')">ぱー</button>
    <p>{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const result = ref('')

function play(choice: string) {
  const options = ['ぐー', 'ちょき', 'ぱー']
  const computerChoice = options[Math.floor(Math.random() * options.length)]
  if (choice === computerChoice) {
    result.value = '引き分け'
  } else if (
    (choice === 'ぐー' && computerChoice === 'ちょき') ||
    (choice === 'ちょき' && computerChoice === 'ぱー') ||
    (choice === 'ぱー' && computerChoice === 'ぐー')
  ) {
    result.value = `${computerChoice}に勝ちました`
  } else {
    result.value = `${computerChoice}に負けました`
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
