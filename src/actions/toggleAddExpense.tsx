import { ATA } from './typings'
import { setFieldByPath } from './setFieldByPath'

export const toggleAddExpense: ATA = () => async (dispatch, getState): Promise<void> => {
  const { addExpense: { visible } } = getState()

  dispatch(setFieldByPath(['addExpense', 'visible'], !visible))
}
