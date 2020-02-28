import { ATA } from './typings'
import { setFieldByPath } from './setFieldByPath'
import { ExistingExpensesDefaultState } from '../reducers/existingExpenses/existingExpenses'

export const getExistingExpenses: ATA = () => async (dispatch): Promise<void> => {
  // TODO: get from server
  const mockDataModel: ExistingExpensesDefaultState['list'] = [
    {
      id: 1,
      label: 'Groceries',
      price: 12.33
    },
    {
      id: 2,
      label: 'Entertainment',
      price: 33.10
    },
    {
      id: 3,
      label: 'Sports',
      price: 1.20
    },
  ]

  dispatch(setFieldByPath(['existingExpenses', 'list'], mockDataModel))
  dispatch(setFieldByPath(['existingExpenses', 'total'], 0))
}
