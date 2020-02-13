import { SetFieldByPathFieldValue } from '../helpers/setFieldByPath'
import { Action, PathReturnType } from './typings'

export const SET_FIELD_BY_PATH = 'SET_FIELD_BY_PATH'
export type SET_FIELD_BY_PATH = Action<{
  path: PathReturnType;
  fieldValue: SetFieldByPathFieldValue;
}>;

export type PathArg = SET_FIELD_BY_PATH['payload']['path'];

export type SetFieldByPath = (path: PathArg, fieldValue: SetFieldByPathFieldValue) => SET_FIELD_BY_PATH;

export const setFieldByPath: SetFieldByPath = (path, fieldValue) => {
  return {
    type: SET_FIELD_BY_PATH,
    payload: {
      path,
      fieldValue,
    },
  }
}
