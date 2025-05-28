<script setup lang="ts">
interface Props {
  type: 'primary' | 'link'
  text?: string
}

defineProps<Props>()
</script>

<template>
  <button type="button" class="custom-button" :class="[type]">
    <slot></slot>
    <p>{{ text }}</p>
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
  border: none;
  text-transform: capitalize;
  transition: all ease 0.3s;

  & *:not(:last-child) {
    margin-right: 10px;
  }

  &.primary {
    padding: 6px 24px;
    background: var(--c-accent);
    border-radius: 20px;
    color: var(--c-primary-900);
    font-size: 1.1rem;
    font-family: var(--font-family);
    font-weight: var(--font-weight-700);

    &:hover {
      opacity: 0.8;
    }
  }

  &.link {
    color: var(--c-primary-700);
    font-size: 1rem;
    font-weight: var(--font-weight-700);
    text-decoration: underline;

    &:hover {
      color: var(--c-primary-900);
    }
  }
}
</style>
