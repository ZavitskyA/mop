import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import { possibleExpensesMakeSelector } from '../../reducers/possibleExpenses/possibleExpensesMakeSelector'
import { useDispatch, useSelector } from 'react-redux'
import { setNewExpenseCategory } from '../../actions/newExpense/setNewExpenseCategory'
import { newExpenseSelectedValueMakeSelector } from '../../reducers/newExpense/newExpenseSelectedValueMakeSelector'

export const AddExpenseFieldSelect: FC = () => {
  const possibleExpenses = useSelector(possibleExpensesMakeSelector())
  const value = useSelector(newExpenseSelectedValueMakeSelector())
  const dispatch = useDispatch()

  const onChange: SelectInputProps['onChange'] = (event) => {
    dispatch(setNewExpenseCategory(event.target.value as string))
  }

  return (
    // TODO: style and translations
    <FormControl style={{ width: '70%' }}>
      <InputLabel id="demo-simple-select-label">Expense</InputLabel>
      <Select value={value} onChange={onChange}>
        {possibleExpenses.map(({ id, label }) =>
          <MenuItem value={id} key={id}>{label}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}
