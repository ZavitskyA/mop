import React, { FC, useCallback } from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldByPath } from '../../actions/setFieldByPath'
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input'
import { newExpensePriceMakeSelector } from '../../reducers/newExpense/newExpensePriceMakeSelector'

const newExpensePriceSelector = newExpensePriceMakeSelector()

export const AddExpenseFieldAmount: FC = () => {
  const dispatch = useDispatch()
  const price = useSelector(newExpensePriceSelector)
  const onChange: StandardInputProps['onChange'] = useCallback((e) => dispatch(setFieldByPath(['newExpense', 'price'], e.target.value)), [dispatch])

  return (
    // TODO: translations and style
    <TextField label="amount" onChange={onChange} value={price} type="number" style={{ width: '30%' }}/>
  )
}
