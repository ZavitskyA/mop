import { createSelector } from 'reselect'
import { State } from '../index'
import { NewExpenseDefaultState } from './newExpense'

export const newExpenseSelectedValueMakeSelector = () => createSelector<State, NewExpenseDefaultState['selectedValue'], number | ''>(
  ({ newExpense: { selectedValue } }) => selectedValue,
  (selectedValue) => selectedValue !== null ? selectedValue : ''
)
