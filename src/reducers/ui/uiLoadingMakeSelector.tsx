import { createSelector } from 'reselect'
import { State } from '../index'
import { UIState } from './ui'

export const uiLoadingMakeSelector = () => createSelector<State, UIState, UIState['loading']>(
  ({ ui }) => ui,
  ({ loading }) => loading
)
