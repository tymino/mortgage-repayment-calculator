import { defineStore } from 'pinia'
import type { IInput } from '../types/IInput'

export const usePayStore = defineStore('pay', {
  state: () => ({
    inputs: {
      amount: {
        id: 0,
        name: 'amount',
        label: 'mortgage amount',
        value: '',
        mark: '£',
        error: false,
        errorText: 'This field is required',
      },
      term: {
        id: 1,
        name: 'term',
        label: 'mortgage term',
        value: '',
        mark: 'years',
        error: false,
        errorText: 'This field is required',
      },
      'interest rate': {
        id: 2,
        name: 'interest rate',
        label: 'mortgage rate',
        value: '',
        mark: '%',
        error: false,
        errorText: 'This field is required',
      },
    },
    type: {
      names: ['repayment', 'interest only'],
      label: 'mortgage type',
      value: '',
      error: false,
      errorText: 'This field is required',
    },
  }),

  actions: {
    setInputValue(data: IInput) {
      const key = data.name as 'amount' | 'term' | 'interest rate'

      this.inputs[key].value = data.value
    },
    setTypeValue(value: string) {
      this.type.value = value
    },
    getResult() {
      console.log('test')
    },
  },
})
