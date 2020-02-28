import { State } from '../reducers'
import { applyPatches } from 'immer'
import { PathReturnType } from '../actions/typings'
import { PossibleExpensesDefaultState } from '../reducers/possibleExpenses/possibleExpenses'
import { NewExpenseDefaultState } from '../reducers/newExpense/newExpense'
import { ExistingExpenseDefaultState } from '../reducers/existingExpenses/existingExpenses'

export type SetFieldByPathFieldValue = boolean | string | null | number
  | PossibleExpensesDefaultState
  | ExistingExpenseDefaultState
  | ExistingExpenseDefaultState[]
  | NewExpenseDefaultState;

interface SetFieldByPathPayload {
  path: PathReturnType;
  fieldValue: SetFieldByPathFieldValue;
}

type SetFieldByPath = (payload: SetFieldByPathPayload, state: State) => State;

export const setFieldByPath: SetFieldByPath = ({ path, fieldValue }, state) =>
  applyPatches(state, [{ op: 'replace', path, value: fieldValue !== '' ? fieldValue : null }])
