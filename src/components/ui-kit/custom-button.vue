<script setup lang="ts">
interface Props {
  type: 'primary' | 'link'
}

defineProps<Props>()
</script>

<template>
  <button type="button" class="custom-button" :class="[type]">
    <slot></slot>
    <p>calculate repayments</p>
  </button>
</template>

<style lang="scss" scoped>
.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  border: 1px solid var(--c-primary-500);

  & *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
