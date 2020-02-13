import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'

export const SaveExpense: FC = () => {
  return (
    // TODO: translations and style
    <Button
      style={{marginTop: 20, marginBottom: 20, width: '100%'}}
      variant="contained"
      color="primary"
      endIcon={<Add/>}
    >
      Add to list
    </Button>
  )
}
