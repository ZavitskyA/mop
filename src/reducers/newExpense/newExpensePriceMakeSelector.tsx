import { createSelector } from 'reselect'
import { State } from '../index'
import { NewExpenseDefaultState } from './newExpense'

const newExpensePriceMakeSelector = () => createSelector<State, NewExpenseDefaultState['price'], NewExpenseDefaultState['price'] | ''>(
  ({ newExpense: { price } }) => price,
  (price) => price === null ? '' : price
)

export const newExpensePriceSelector = newExpensePriceMakeSelector()
