import { PossibleExpenses } from '../possibleExpenses/possibleExpenses'

export interface NewExpenseDefaultState {
  selectedValue: PossibleExpenses | null,
  price: number | null
}

export const newExpensesState: NewExpenseDefaultState = {
  selectedValue: null,
  price: null
}
