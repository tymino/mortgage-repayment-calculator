<script setup lang="ts">
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
    <label class="custom-input__label">
      <span class="custom-input__text">{{ data.label }}</span>
      <input
        class="custom-input__imput"
        type="number"
        :value="data.value"
        @input="updateInput"
        :name="data.name"
      />
      <p>Значение: {{ data }}</p>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
