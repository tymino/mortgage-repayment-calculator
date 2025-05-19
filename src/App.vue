<script setup lang="ts">
import { computed } from 'vue'
import { usePayStore } from './stores/usePayStore'

import customInput from './components/custom-input.vue'
import customSelect from './components/custom-select.vue'

const store = usePayStore()

const amount = computed({
  get: () => store.inputs['amount'],
  set: (data) => store.setInputValue(data),
})

const term = computed({
  get: () => store.inputs['amount'],
  set: (data) => store.setInputValue(data),
})

const interestRate = computed({
  get: () => store.inputs['amount'],
  set: (data) => store.setInputValue(data),
})
</script>

<template>
  <div class="container">
    <custom-input :data="store.inputs.amount" v-model:data-input="amount" />
    <custom-select />

    <custom-input :data="store.inputs.term" v-model:data-input="term" />
    <custom-input
      :data="store.inputs['interest rate']"
      v-model:data-input="interestRate"
    />
  </div>
</template>

<style scoped></style>
