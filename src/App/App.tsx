import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './createStore'
import { Month } from '../components/Month'
import { AppHeader } from '../components/AppHeader'
import { CssBaseline } from '@material-ui/core'
import { HashRouter, Route, Switch } from 'react-router-dom'

export const App: FC = () => (
  <Provider store={store}>
    <CssBaseline/>
    <AppHeader/>

    <HashRouter>
      <Switch>
        <Route path={'/'} exact component={Month}/>
        <Route path={'/test'} exact component={() => <>test</>}/>
      </Switch>
    </HashRouter>
  </Provider>
)
