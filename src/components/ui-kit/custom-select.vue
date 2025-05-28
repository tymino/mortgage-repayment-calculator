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

<style lang="scss" scoped>
.custom-select {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__container {
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid var(--c-primary-500);
    border-radius: var(--border-radius-items);

    &:has(.custom-select__input:checked) {
      border: 1px solid var(--c-accent);
      background-color: var(--c-accent-opacity);
    }

    &:hover {
      border-color: var(--c-accent);
    }
  }

  &__input {
    appearance: none;
    width: 19px;
    height: 18px;
    border: 1px solid var(--c-primary-500);
    border-radius: 50%;
    cursor: pointer;

    &:checked {
      position: relative;
      border: 1px solid var(--c-accent);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background-color: var(--c-accent);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__label {
    width: 100%;
    padding: 10px 0 10px 8px;
    color: var(--c-primary-900);
    font-family: var(--font-family);
    font-size: 0.9rem;
    font-weight: var(--font-weight-700);
    text-transform: capitalize;
    cursor: pointer;
    user-select: none;
  }
}
</style>
