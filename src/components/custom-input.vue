<script setup lang="ts">
import customTexts from './custom-text.vue'

import type { IInput } from '../types/IInput'

interface Props {
  data: IInput
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
      <div>
        <label :for="data.name">{{ data.label }}</label>
        <div>
          <label :for="data.name">{{ data.mark }}</label>
          <input
            class="custom-input__imput"
            :id="data.name"
            type="number"
            :name="data.name"
            :value="data.value"
            @input="updateInput"
          />
        </div>
      </div>
    </custom-texts>
    <custom-texts type="error" :is-visible="data.error">
      {{ data.errorText }}
    </custom-texts>
  </div>
</template>

<style lang="scss" scoped></style>
