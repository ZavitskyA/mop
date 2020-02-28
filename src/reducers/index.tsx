import { reducer } from '../helpers/reducerSwitchcase'
import { setFieldByPath } from '../helpers/setFieldByPath'
import { SET_FIELD_BY_PATH } from '../actions/setFieldByPath'
import { uiDefaultState, UIState } from './ui/ui'
import { AddExpenseDefaultState, addExpenseState } from './addExpense/addExpense'
import { possibleExpensesDefaultState, PossibleExpensesDefaultState } from './possibleExpenses/possibleExpenses'
import { NewExpenseDefaultState, newExpensesState } from './newExpense/newExpense'
import { ExistingExpensesDefaultState, existingExpensesState } from './existingExpenses/existingExpenses'

export interface State {
  ui: UIState,
  addExpense: AddExpenseDefaultState,
  existingExpenses: ExistingExpensesDefaultState,
  newExpense: NewExpenseDefaultState,
  possibleExpenses: PossibleExpensesDefaultState,
}

export const defaultState: State = {
  ui: uiDefaultState,
  addExpense: addExpenseState,
  existingExpenses: existingExpensesState,
  newExpense: newExpensesState,
  possibleExpenses: possibleExpensesDefaultState
}

export const stateReducer = reducer(defaultState, {
  [SET_FIELD_BY_PATH]: setFieldByPath
})
