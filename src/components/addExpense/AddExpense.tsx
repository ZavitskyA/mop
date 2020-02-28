import React, { FC } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { IconButton } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { AddExpenseField } from './AddExpenseField'
import { toggleAddExpense } from '../../actions/toggleAddExpense'

export const AddExpense: FC = () => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(toggleAddExpense())

  return (
    <>
      <IconButton onClick={onClick} size="medium">
        <AddCircleIcon color="primary"/>
      </IconButton>
      <AddExpenseField/>
    </>
  )
}
