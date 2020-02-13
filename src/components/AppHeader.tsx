import React, { FC } from 'react'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export const AppHeader: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon/>
      </IconButton>
    </Toolbar>
  </AppBar>
)
