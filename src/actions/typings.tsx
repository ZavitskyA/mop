import { ThunkAction } from 'redux-thunk'
import { State } from '../reducers'
import { Action as TAction } from 'redux'

export interface Action<TPayload> {
  type: string;
  payload: TPayload;
  meta?: {
    mute?: boolean;
  };
}

/*tslint:disable-next-line:no-any*/
// TODO: add path types
export type PathReturnType = any[];

export type ATA = () => ThunkAction<void, State, {}, TAction>
