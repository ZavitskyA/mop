import { createSelector } from 'reselect'
import { State } from '../index'
import { ExistingExpensesDefaultState } from './existingExpenses'

export const existingExpensesListMakeSelector = () => createSelector<State, ExistingExpensesDefaultState['list'], ExistingExpensesDefaultState['list']>(
  ({ existingExpenses: { list } }) => list,
  (list) => list
)
