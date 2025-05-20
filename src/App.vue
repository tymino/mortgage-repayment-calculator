<script setup lang="ts">
import { computed } from 'vue'
import { usePayStore } from './stores/usePayStore'

import customText from './components/custom-text.vue'
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
  <div class="main-container">
    <div class="calculator">
      <div class="header">
        <custom-text type="header" :is-visible="true">
          mortgage calculator
        </custom-text>

        <button>clear all</button>
      </div>
      <div class="body">
        <custom-input
          class="input-amount"
          :data="store.inputs.amount"
          v-model:data-input="amount"
        />
        <div class="wrapper">
          <custom-input
            class="term"
            :data="store.inputs.term"
            v-model:data-input="term"
          />

          <custom-input
            class="rate"
            :data="store.inputs['interest rate']"
            v-model:data-input="interestRate"
          />
        </div>

        <custom-select class="type" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
