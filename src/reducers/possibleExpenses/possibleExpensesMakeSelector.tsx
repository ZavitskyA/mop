import { createSelector } from 'reselect'
import { State } from '../index'
import { PossibleExpensesDefaultState } from './possibleExpenses'

const possibleExpensesMakeSelector = () => createSelector<State, PossibleExpensesDefaultState, PossibleExpensesDefaultState>(
  ({ possibleExpenses }) => possibleExpenses,
  (possibleExpenses) => possibleExpenses
)

export const expenseSelector = possibleExpensesMakeSelector()
