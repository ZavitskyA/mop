import { createSelector } from 'reselect'
import { State } from '../index'
import { NewExpenseDefaultState } from './newExpense'

const newExpenseSelectedValueMakeSelector = () => createSelector<State, NewExpenseDefaultState['selectedValue'], number | ''>(
  ({ newExpense: { selectedValue } }) => selectedValue,
  (selectedValue) => selectedValue !== null ? selectedValue : ''
)

export const newExpenseValueSelector = newExpenseSelectedValueMakeSelector()
