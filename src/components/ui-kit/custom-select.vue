<script setup lang="ts">
import customTexts from './custom-text.vue'

import { usePayStore } from '../../stores/usePayStore'

const store = usePayStore()
</script>

<template>
  <div class="custom-select">
    <custom-texts type="label" :is-visible="true">
      {{ store.type.label }}
    </custom-texts>
    <div
      class="custom-select__container"
      v-for="item in store.type.names"
      :key="item"
    >
      <input
        class="custom-select__input"
        type="radio"
        :id="item"
        :value="item"
        v-model="store.type.value"
      />
      <label class="custom-select__label" :for="item">{{ item }}</label>
    </div>
    <custom-texts type="error" :is-visible="store.type.error">
      {{ store.type.errorText }}
    </custom-texts>
  </div>
</template>

<style lang="scss" scoped></style>
