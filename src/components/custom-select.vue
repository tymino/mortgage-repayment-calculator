<script setup lang="ts">
import { usePayStore } from '../stores/usePayStore'

const store = usePayStore()
</script>

<template>
  <div class="custom-select">
    <p class="custom-select__main-label">{{ store.type.label }}</p>
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
  </div>
</template>

<style lang="scss" scoped></style>
