import { ATA } from '../typings'
import { setFieldByPath } from '../setFieldByPath'
import { resetNewExpense } from './resetNewExpense'
import { ExistingExpensesDefaultState } from '../../reducers/existingExpenses/existingExpenses'

export const saveNewExpense: ATA = () => async (dispatch, getState): Promise<void> => {
  // TODO: make request to server
  const { newExpense, existingExpenses } = getState()

  // TODO: count total
  const copy: ExistingExpensesDefaultState['list'] = [{
    id: Math.random(),
    label: newExpense.label,
    price: newExpense.price
  }, ...existingExpenses.list]

  dispatch(setFieldByPath(['existingExpenses', 'list'], copy))
  dispatch(resetNewExpense())
}
