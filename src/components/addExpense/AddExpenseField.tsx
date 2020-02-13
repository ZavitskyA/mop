import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { addExpenseVisibleMakeSelector } from '../../reducers/addExpense/addExpenseVisibleMakeSelector'
import { AddExpenseFieldSelect } from './AddExpenseFieldSelect'
import { AddExpenseFieldAmount } from './AddExpenseFieldAmount'
import { SaveExpense } from './SaveExpense'

export const AddExpenseField: FC = () => {
  const visible = useSelector(addExpenseVisibleMakeSelector())

  if (!visible) {
    return null
  }

  return (
    <div>
      <AddExpenseFieldSelect/>
      <AddExpenseFieldAmount/>
      <SaveExpense/>
    </div>
  )
}
