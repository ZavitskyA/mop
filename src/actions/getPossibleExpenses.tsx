import { ATA } from './typings'
import { setFieldByPath } from './setFieldByPath'
import { PossibleExpensesDefaultState } from '../reducers/possibleExpenses/possibleExpenses'

export const getPossibleExpenses: ATA = () => async (dispatch): Promise<void> => {
  // TODO: get from server
  const mockDataModel: PossibleExpensesDefaultState = [
    {
      id: 1,
      name: 'Groceries'
    },
    {
      id: 2,
      name: 'Entertainment'
    },
    {
      id: 3,
      name: 'Sports'
    },
  ]

  dispatch(setFieldByPath(['possibleExpenses'], mockDataModel))
}
