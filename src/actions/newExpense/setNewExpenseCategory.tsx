import { APAWP1 } from '../typings'
import { setFieldByPath } from '../setFieldByPath'

export const setNewExpenseCategory: APAWP1<string> = (value) => async (dispatch, getState): Promise<void> => {
  const { possibleExpenses } = getState()
  const selectedLabel = possibleExpenses.find(({ id }) => id === parseInt(value, 10))

  dispatch(setFieldByPath(['newExpense', 'selectedValue'], value))
  dispatch(setFieldByPath(['newExpense', 'label'], selectedLabel!.label))
}
