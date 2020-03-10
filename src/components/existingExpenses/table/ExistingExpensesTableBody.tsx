import React, { FC } from 'react'
import { IconButton, TableBody, TableCell, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { existingExpensesListMakeSelector } from '../../../reducers/existingExpenses/existingExpensesListMakeSelector'
import { removeExpense } from '../../../actions/removeExpense'

const expensesSelector = existingExpensesListMakeSelector();

export const ExistingExpensesTableBody: FC = () => {
  const expenses = useSelector(expensesSelector)
  const dispatch = useDispatch()
  const onClick = (id: number) => dispatch(removeExpense(id))

  // TODO: remove anonymous func
  return (
    <TableBody>
      {expenses.map(({ id, label, price }) => (
        <TableRow key={`existing_expenses_${id}`}>
          <TableCell component="th" scope="row">{label}</TableCell>
          <TableCell align="right">{price}</TableCell>
          <TableCell align="right">
            <IconButton aria-label="delete" color="primary" onClick={() => onClick(id)}>
              <DeleteIcon/>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
