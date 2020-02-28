import React, { FC } from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

export const ExistingExpensesTableHeader: FC = () => (
  <TableHead>
    <TableRow>
      <TableCell>Category</TableCell>
      <TableCell align="right">Price</TableCell>
      <TableCell/>
    </TableRow>
  </TableHead>
)
