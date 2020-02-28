export interface NewExpenseDefaultState {
  selectedValue: number | null,
  price: number | null,
  label: string | null
}

export const newExpensesState: NewExpenseDefaultState = {
  selectedValue: null,
  price: null,
  label: null
}
