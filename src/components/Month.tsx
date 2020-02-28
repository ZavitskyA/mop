import React, { FC, useEffect } from 'react'
import { AddExpense } from './addExpense/AddExpense'
import { useDispatch } from 'react-redux'
import { getPossibleExpenses } from '../actions/getPossibleExpenses'
import { ExistingExpenses } from './existingExpenses/ExistingExpenses'

export const Month: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPossibleExpenses())
  }, [dispatch])

  return (
    <>
      <AddExpense/>
      <ExistingExpenses/>
    </>
  )
}
