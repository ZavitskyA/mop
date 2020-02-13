import { createSelector } from 'reselect'
import { State } from '../index'
import { AddExpenseDefaultState } from './addExpense'

export const addExpenseVisibleMakeSelector = () => createSelector<State, AddExpenseDefaultState, AddExpenseDefaultState['visible']>(
  ({ addExpense }) => addExpense,
  ({ visible }) => visible
)
