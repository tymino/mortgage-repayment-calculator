<script setup lang="ts">
import { computed } from 'vue'
import { usePayStore } from '../stores/usePayStore'

const store = usePayStore()

interface Props {
  label: string
  placeholder: string
  value: string
  type: string
  name: string
}

// defineProps<Props>()

const number = computed({
  get: () => store.amount,
  set: (val) => store.setAmount(val),
})
</script>

<template>
  <div class="custom-input">
    <label class="custom-input__label">
      <span class="custom-input__text">Label</span>
      <input type="number" v-model="number" placeholder="Введите цифры" />
      <p>Значение: {{ number }}</p>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
