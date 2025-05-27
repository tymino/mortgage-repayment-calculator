import { defineStore } from 'pinia'
import type { IInput } from '../types/IInput'

export const usePayStore = defineStore('pay', {
  state: () => ({
    inputs: {
      amount: {
        id: 0,
        name: 'amount',
        label: 'mortgage amount',
        value: '300000',
        mark: '£',
        error: true,
        errorText: 'This field is required',
      },
      term: {
        id: 1,
        name: 'term',
        label: 'mortgage term',
        value: '25',
        mark: 'years',
        error: false,
        errorText: 'This field is required',
      },
      'interest rate': {
        id: 2,
        name: 'interest rate',
        label: 'mortgage rate',
        value: '5.25',
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
    rateNum: (state) => Number(state.inputs['interest rate'].value),
  },
  actions: {
    setInputValue(data: IInput) {
      const key = data.name as 'amount' | 'term' | 'interest rate'

      this.inputs[key].value = data.value
    },
    setTypeValue(value: string) {
      this.type.value = value
    },
    checkValues() {
      if (
        this.amountNum < 0 ||
        this.termNum <= 0 ||
        this.rateNum < 0 ||
        this.type.value === ''
      ) {
        return false
      }

      return true
    },
    getMark(value: string) {
      return `${this.markPrice}${value}`
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

      this.result.monthlyPayment = this.getMark(formattedMonthlyPayment)
      this.result.totalRepay = this.getMark(formattedTotalRepay)
      this.result.isShowResultTab = true
    },
    getResult() {
      if (this.checkValues()) {
        console.log('getResult', this.calculateMortgage())
        return this.calculateMortgage()
      }
    },
  },
})
