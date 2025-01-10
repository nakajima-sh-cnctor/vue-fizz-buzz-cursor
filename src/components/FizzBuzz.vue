<template>
  <div>
    <p v-for="n in numbers" :key="n">{{ fizzBuzz(n) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const numbers = ref<number[]>([1, 2, 3, 4, 5, 15, 30])

function fizzBuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}
</script>
