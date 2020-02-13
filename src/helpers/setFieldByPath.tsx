import { State } from '../reducers'
import { applyPatches } from 'immer'
import { PathReturnType } from '../actions/typings'
import { PossibleExpensesDefaultState } from '../reducers/possibleExpenses/possibleExpenses'

export type SetFieldByPathFieldValue = boolean | string | null | number
 | PossibleExpensesDefaultState;

interface SetFieldByPathPayload {
  path: PathReturnType;
  fieldValue: SetFieldByPathFieldValue;
}

type SetFieldByPath = (payload: SetFieldByPathPayload, state: State) => State;

export const setFieldByPath: SetFieldByPath = ({ path, fieldValue }, state) =>
  applyPatches(state, [{ op: 'replace', path, value: fieldValue !== '' ? fieldValue : null }])
