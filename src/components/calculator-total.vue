<script setup lang="ts">
interface IProps {
  monthValue: string
  totalValue: string
}

defineProps<IProps>()
</script>

<template>
  <div class="calculator-total">
    <p class="total__title">Your results</p>
    <p class="total__describe">
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="total__wrapper-result">
      <p class="result__month-label">Your monthly repayments</p>
      <p class="result__month-value">{{ monthValue }}</p>

      <p class="result__total-label">Total you'll repay over the term</p>
      <p class="result__total-value">{{ totalValue }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator-total {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
}

.total {
  &__title {
    margin-bottom: 10px;
    color: var(--c-primary);
    font-size: 1.4rem;
    font-weight: var(--font-weight-700);
  }

  &__describe {
    margin-bottom: 34px;
    color: var(--c-primary-300);
    font-size: 0.9rem;
    font-weight: var(--font-weight-500);
  }

  &__wrapper-result {
    padding: 20px;
    background-color: var(--c-primary-940);
    border-radius: var(--border-radius);
    box-shadow: 0px -3px 0px 0px var(--c-accent);
  }
}

.result {
  &__month-label {
    margin-bottom: 10px;
    color: var(--c-primary-300);
    font-size: 0.8rem;
    font-weight: var(--font-weight-500);
  }

  &__month-value {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--c-primary-700);
    color: var(--c-accent);
    font-size: 2.6rem;
    font-weight: var(--font-weight-700);
  }

  &__total-label {
    padding-top: 20px;
    padding-bottom: 8px;
    color: var(--c-primary-300);
    font-size: 0.8rem;
    font-weight: var(--font-weight-500);
  }

  &__total-value {
    color: var(--c-primary);
    font-size: 1.6rem;
    font-weight: var(--font-weight-700);
  }
}
</style>
