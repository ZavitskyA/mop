import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './createStore'
import { Month } from '../components/Month'
import { AppHeader } from '../components/AppHeader'
import { CssBaseline } from '@material-ui/core'

export const App: FC = () => (
  <Provider store={store}>
    <CssBaseline/>
    <AppHeader/>
    <Month/>
  </Provider>
)
