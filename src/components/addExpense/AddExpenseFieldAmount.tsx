import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldByPath } from '../../actions/setFieldByPath'
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input'
import { newExpensePriceMakeSelector } from '../../reducers/newExpense/newExpensePriceMakeSelector'

export const AddExpenseFieldAmount: FC = () => {
  const dispatch = useDispatch()
  const price = useSelector(newExpensePriceMakeSelector())
  const onChange: StandardInputProps['onChange'] = (e) => dispatch(setFieldByPath(['newExpense', 'price'], e.target.value))

  return (
    // TODO: translations and style
    <TextField label="amount" onChange={onChange} value={price} type="number" style={{width: '30%'}}/>
  )
}
