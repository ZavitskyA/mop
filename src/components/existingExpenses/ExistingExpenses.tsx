import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExistingExpenses } from '../../actions/getExistingExpenses'
import { Table } from '@material-ui/core'
import { ExistingExpensesTableHeader } from './table/ExistingExpensesTableHeader'
import { ExistingExpensesTableBody } from './table/ExistingExpensesTableBody'

export const ExistingExpenses: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExistingExpenses())
  }, [dispatch])

  return (
    <Table stickyHeader>
      <ExistingExpensesTableHeader/>
      <ExistingExpensesTableBody/>
    </Table>
  )
}
