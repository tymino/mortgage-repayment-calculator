<script setup lang="ts">
import { usePayStore } from './stores/usePayStore'

import calculatorInput from './components/calculator-input.vue'
import calculatorIcon from './components/calculator-icon.vue'
import calculatorTotal from './components/calculator-total.vue'

const store = usePayStore()
</script>

<template>
  <div class="main-container">
    <calculator-input />
    <div class="result-container">
      <calculator-total
        v-if="store.result.isShowResultTab"
        :month-value="store.result.monthlyPayment"
        :total-value="store.result.totalRepay"
      />
      <calculator-icon v-else />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  background: var(--c-primary);
  border-radius: var(--border-radius);
}

.result-container {
  max-width: 420px;
  background-color: var(--c-primary-900);
  border-radius: 0 var(--border-radius) var(--border-radius)
    calc(var(--border-radius) * 4);
}
</style>
