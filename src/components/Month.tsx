import React, { FC, useEffect } from 'react'
import { AddExpense } from './addExpense/AddExpense'
import { useDispatch } from 'react-redux'
import { getPossibleExpenses } from '../actions/getPossibleExpenses'

export const Month: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPossibleExpenses())
  }, [dispatch])

  return (
    // TODO: translations
    <>
      <AddExpense/>

      <div>total</div>

      <div>Add new section</div>

      <div>expense table</div>
    </>
  )
}
