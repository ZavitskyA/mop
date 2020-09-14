import { createSelector } from 'reselect'
import { State } from '../index'
import { AddExpenseDefaultState } from './addExpense'

const addExpenseVisibleMakeSelector = () => createSelector<State, AddExpenseDefaultState, AddExpenseDefaultState['visible']>(
  ({ addExpense }) => addExpense,
  ({ visible }) => visible
)

export const addExpenseVisibleSelector = addExpenseVisibleMakeSelector()
