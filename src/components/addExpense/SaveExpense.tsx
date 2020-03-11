import React, { FC, useCallback } from 'react'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { saveNewExpense } from '../../actions/newExpense/saveNewExpense'
import { newExpenseFilledMakeSelector } from '../../reducers/newExpense/newExpenseFilledMakeSelector'

const newExpenseFilledSelector = newExpenseFilledMakeSelector()

export const SaveExpense: FC = () => {
  const dispatch = useDispatch()
  const onClick = useCallback(() => dispatch(saveNewExpense()), [dispatch])

  const buttonEnabled = useSelector(newExpenseFilledSelector)

  return (
    // TODO: translations and style
    <Button
      style={{ marginTop: 20, marginBottom: 20, width: '100%' }}
      variant="contained"
      color="primary"
      onClick={onClick}
      endIcon={<Add/>}
      disabled={!buttonEnabled}
    >
      Add to list
    </Button>
  )
}
