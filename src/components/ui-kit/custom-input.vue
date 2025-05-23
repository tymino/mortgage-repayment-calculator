<script setup lang="ts">
import customTexts from './custom-text.vue'

import type { IInput } from '../../types/IInput'

interface Props {
  data: IInput
  isReverse: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:dataInput'])

function updateInput(event: Event) {
  emit('update:dataInput', {
    name: props.data.name,
    value: (event.target as HTMLInputElement).value,
  })
}
</script>

<template>
  <div class="custom-input">
    <custom-texts type="label" :is-visible="true">
      <div class="wrapper">
        <label :for="data.name">{{ data.label }}</label>
        <div
          class="input-container"
          :class="{ reverse: isReverse, error: data.error }"
        >
          <label
            class="label-mark"
            :class="{ error: data.error }"
            :for="data.name"
            >{{ data.mark }}</label
          >
          <input
            class="input"
            :id="data.name"
            type="number"
            :name="data.name"
            :value="data.value"
            @input="updateInput"
          />
        </div>
      </div>
    </custom-texts>
    <custom-texts class="error-text" type="error" :is-visible="data.error">
      {{ data.errorText }}
    </custom-texts>
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-container {
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid var(--c-primary-500);
  border-radius: var(--border-radius-items);
  cursor: pointer;

  & > .label-mark {
    border-radius: 0 var(--border-radius-items) var(--border-radius-items) 0;
  }

  &.reverse {
    flex-direction: row;

    & > .label-mark {
      border-radius: var(--border-radius-items) 0 0 var(--border-radius-items);
    }
  }

  &.error {
    border-color: var(--c-error);
  }

  &:hover:not(.error) {
    border: 1px solid var(--c-primary-900);
  }

  &:focus-within {
    border-color: var(--c-accent);

    & .label-mark {
      background: var(--c-accent);
      color: var(--c-primary-700);
    }

    &:hover:not(.error) {
      border-color: var(--c-accent);
    }
  }
}

.label-mark {
  padding: 0 14px;
  font-size: 14px;
  background: var(--c-primary-100);
  color: var(--c-primary-700);
  font-weight: var(--font-weight-700);
  line-height: 40px;
  cursor: pointer;

  &.error {
    background: var(--c-error);
    color: var(--c-primary);
  }
}

.input {
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--border-radius-items);
  color: var(--c-primary-900);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: var(--font-weight-700);
  cursor: pointer;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
}

.error-text {
  margin-top: 4px;
}
</style>
