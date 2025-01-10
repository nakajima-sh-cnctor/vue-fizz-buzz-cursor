<template>
  <div>
    <p v-for="n in numbers" :key="n">{{ fizzBuzz(n) }}</p>
  </div>
</template>

<script setup lang="ts">
// propsとしてnumbersを受け取る
const props = defineProps<{
  numbers?: number[]
}>()

// propsを使用していることを明示
const { numbers } = props

// FizzBuzzのロジックを実装
function fizzBuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n.toString()
}
</script>
