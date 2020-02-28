import { APAWP1 } from './typings'
import { setFieldByPath } from './setFieldByPath'

export const removeExpense: APAWP1<number> = (eId) => async (dispatch, getState): Promise<void> => {
  // TODO: make request to server to delete item
  const { existingExpenses: { list } } = getState()
  dispatch(setFieldByPath(['existingExpenses', 'list'], list.filter(({ id }) => id !== eId)))
}
