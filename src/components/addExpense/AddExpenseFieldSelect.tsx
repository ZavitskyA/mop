import React, { FC, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { setFieldByPath } from '../../actions/setFieldByPath'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import { possibleExpensesMakeSelector } from '../../reducers/possibleExpenses/possibleExpensesMakeSelector'
import { useDispatch, useSelector } from 'react-redux'

export const AddExpenseFieldSelect: FC = () => {
  const possibleExpenses = useSelector(possibleExpensesMakeSelector())
  // value is already stored in store, no need in storing here
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onChange: SelectInputProps['onChange'] = (event) => {
    setValue(event.target.value as string)
    dispatch(setFieldByPath(['newExpense', 'selected'], value))
  }

  return (
    // TODO: style
    <FormControl style={{ width: '70%' }}>
      <InputLabel id="demo-simple-select-label">Expense</InputLabel>
      <Select value={value} onChange={onChange}>
        {possibleExpenses.map(({ id, name }) =>
          <MenuItem value={id} key={id}>{name}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}
