import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './createStore'
import { Month } from '../components/Month'
import { AppHeader } from '../components/AppHeader'

export const App: FC = () => (
  <Provider store={store}>
    <AppHeader/>
    <Month/>
  </Provider>
)
