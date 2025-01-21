<template>
  <v-app>
    <v-main>
      <v-container>
        <FizzBuzz :numbers="[1, 2, 3, 4, 5, 15, 30]" />
        <FizzBuzz :numbers="[6, 7, 8, 9, 10, 11, 12]" />
        <RockPaperScissors />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import FizzBuzz from './components/FizzBuzz.vue'
import RockPaperScissors from './components/RockPaperScissors.vue'
</script>

<style>
@import 'vuetify/styles';
</style>
