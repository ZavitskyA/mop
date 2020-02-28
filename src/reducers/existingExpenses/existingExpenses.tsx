
export interface ExistingExpenseDefaultState {
  id: number;
  label: string | null;
  price: number | null;
}

export interface ExistingExpensesDefaultState {
  list: ExistingExpenseDefaultState[];
  total: number | null;
}

export const existingExpensesState: ExistingExpensesDefaultState = {
  list: [],
  total: null
}
