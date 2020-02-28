import { createSelector } from 'reselect'
import { State } from '../index'
import { ExistingExpensesDefaultState } from './existingExpenses'

export const existingExpensesTotalMakeSelector = () => createSelector<State, ExistingExpensesDefaultState['total'], ExistingExpensesDefaultState['total']>(
  ({ existingExpenses: { total } }) => total,
  (total) => total || 0
)
