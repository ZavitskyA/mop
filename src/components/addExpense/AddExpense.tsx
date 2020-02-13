import React, { FC } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setFieldByPath } from '../../actions/setFieldByPath'
import { AddExpenseField } from './AddExpenseField'

export const AddExpense: FC = () => {
  const dispatch = useDispatch()
  // TODO: move to separate action
  const onClick = () => dispatch(setFieldByPath(['addExpense', 'visible'], true))

  return (
    <>
      <IconButton onClick={onClick}>
        <AddCircleIcon color="primary"/>
      </IconButton>
      <AddExpenseField/>
    </>
  )
}
