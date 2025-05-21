<script setup lang="ts">
import calculatorInput from './components/calculator-input.vue'
</script>

<template>
  <div class="main-container">
    <calculator-input />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: var(--c-primary);
  border-radius: 10px;
}
</style>
