import { createSelector } from 'reselect'
import { State } from '../index'
import { NewExpenseDefaultState } from './newExpense'

type ReturnType = Pick<NewExpenseDefaultState, 'selectedValue' | 'price'>

export const newExpenseFilledMakeSelector = () => createSelector<State, ReturnType, boolean>(
  ({ newExpense: { selectedValue, price } }) => ({ selectedValue, price }),
  ({selectedValue, price}) => !!(selectedValue && price)
)
