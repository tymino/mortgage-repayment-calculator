<script setup lang="ts">
interface Props {
  type: 'error' | 'label' | 'header'
  isVisible: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="custom-text" :class="[type, { visible: isVisible }]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-text {
  text-transform: capitalize;
  opacity: 0;

  &.visible {
    opacity: 1;
  }

  &.header {
    color: var(--c-primary-900);
    font-size: 1.6rem;
    line-height: 1.4rem;
    font-weight: var(--font-weight-700);
  }

  &.label {
    color: var(--c-primary-700);
    font-size: 1rem;
    font-weight: var(--font-weight-500);
  }

  &.error {
    color: var(--c-error);
    font-size: 0.8rem;
    font-weight: var(--font-weight-500);
  }
}

@media (max-width: 450px) {
  .custom-text {
    &.header {
      font-size: 1.4rem;
    }
  }
}
</style>
