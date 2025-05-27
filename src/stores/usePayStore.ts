import { defineStore } from 'pinia'
import type { IInput } from '../types/IInput'

export const usePayStore = defineStore('pay', {
  state: () => ({
    inputs: {
      amount: {
        id: 0,
        name: 'amount',
        label: 'mortgage amount',
        value: '1000',
        mark: '£',
        error: false,
        errorText: 'This field is required',
      },
      term: {
        id: 1,
        name: 'term',
        label: 'mortgage term',
        value: '10',
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
    result: {
      isShowResultTab: false,
      monthlyPayment: '',
      totalRepay: '',
    },
  }),
  getters: {
    amountNum: (state) => Number(state.inputs.amount.value),
    markPrice: (state) => state.inputs.amount.mark,
    termNum: (state) => Number(state.inputs.term.value),
    rateNum: (state) =>
      state.inputs['interest rate'].value === ''
        ? 0.000000001
        : Number(state.inputs['interest rate'].value),
  },
  actions: {
    clearErrors() {
      this.inputs.amount.error = false
      this.inputs.term.error = false
      this.inputs['interest rate'].error = false
      this.type.error = false
    },
    clearAll() {
      this.clearErrors()
      this.inputs.amount.value = ''
      this.inputs.term.value = ''
      this.inputs['interest rate'].value = ''
      this.type.value = ''
      this.result.isShowResultTab = false
    },
    setInputValue(data: IInput) {
      const key = data.name as 'amount' | 'term' | 'interest rate'

      this.inputs[key].value = data.value
    },
    setTypeValue(value: string) {
      this.type.value = value
    },
    checkValidValues() {
      this.clearErrors()

      let isValid = true

      if (this.amountNum < 1) {
        this.inputs.amount.error = true
        isValid = false
      }
      if (this.termNum <= 0) {
        this.inputs.term.error = true
        isValid = false
      }
      if (this.rateNum < 0) {
        this.inputs['interest rate'].error = true
        isValid = false
      }
      if (this.type.value === '') {
        this.type.error = true
        isValid = false
      }

      return isValid
    },
    calculateMortgage() {
      let monthlyPayment = 0

      if (this.type.value === 'repayment') {
        const monthlyInterestRate = this.rateNum / 12 / 100
        const numberOfPayments = this.termNum * 12

        monthlyPayment =
          (this.amountNum *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
      } else if (this.type.value === 'interest only') {
        monthlyPayment = (this.amountNum * (this.rateNum / 100)) / 12
      }

      const monthlyPaymentFormatted = monthlyPayment.toFixed(2)
      const totalRepayOverTheTerm = (
        monthlyPayment *
        this.termNum *
        12
      ).toFixed(2)

      const formattedMonthlyPayment = new Intl.NumberFormat('en-US').format(
        Number(monthlyPaymentFormatted),
      )

      const formattedTotalRepay = new Intl.NumberFormat('en-US').format(
        Number(totalRepayOverTheTerm),
      )

      console.log(this.rateNum, this.termNum)

      this.result.monthlyPayment = this.getMarkWithValue(
        formattedMonthlyPayment,
      )
      this.result.totalRepay = this.getMarkWithValue(formattedTotalRepay)
      this.result.isShowResultTab = true
    },
    getMarkWithValue(value: string) {
      return `${this.markPrice}${value}`
    },
    getResult() {
      if (this.checkValidValues()) {
        const result = this.calculateMortgage()

        console.log('getResult', result)

        return result
      }
    },
  },
})
