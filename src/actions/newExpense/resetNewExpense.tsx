import { ATA } from '../typings'
import { setFieldByPath } from '../setFieldByPath'
import { newExpensesState } from '../../reducers/newExpense/newExpense'

export const resetNewExpense: ATA = () => async (dispatch): Promise<void> => {
  dispatch(setFieldByPath(['newExpense'], newExpensesState))
}
