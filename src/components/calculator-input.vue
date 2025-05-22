<script setup lang="ts">
import { computed } from 'vue'
import { usePayStore } from '../stores/usePayStore'

import customText from './ui-kit/custom-text.vue'
import customInput from './ui-kit/custom-input.vue'
import customSelect from './ui-kit/custom-select.vue'
import customButton from './ui-kit/custom-button.vue'

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
  <div class="calculator-input">
    <div class="title">
      <custom-text type="header" :is-visible="true">
        mortgage calculator
      </custom-text>

      <custom-button type="link" text="clear all" />
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

      <custom-button
        class="button"
        type="primary"
        text="calculate repayments"
        @click="store.getResult"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
          />
        </svg>
      </custom-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator-input {
  width: 400px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.body {
  .input-amount {
  }

  .wrapper {
    .term {
    }

    .rate {
    }
  }

  .type {
  }

  .button {
  }
}
</style>
