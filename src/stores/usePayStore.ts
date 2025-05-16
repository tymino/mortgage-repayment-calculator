import { defineStore } from 'pinia'

export const usePayStore = defineStore('pay', {
  state: () => ({
    amount: '',
    term: '',
    intRate: '',
  }),
  actions: {
    setAmount(value: string) {
      this.amount = value
    },
  },
})
