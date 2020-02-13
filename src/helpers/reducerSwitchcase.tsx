import { Action } from '../actions/typings'

type SwitchcaseReturn<S, P> = S | ((payload: P, state: S) => S);
type Switchcase = <S, P>(cases: Cases<S, P>, state: S, type: string) => SwitchcaseReturn<S, P>;
type ExecuteIfFunction = <S, P>(f: SwitchcaseReturn<S, P>, state: S, payload: P) => S;
type SwitchcaseF = <S, P>(cases: Cases<S, P>, state: S, type: string, payload: P) => S;
type Reducer = <S, P>(defaultState: S, cases: Cases<S, P>) => (state: S, action: Action<P>) => S;

interface Cases<S, P> {
  [key: string]: (payload: P, state: S) => S;
}

/**
 * Decide if either case or current state should be returned
 *
 * @param cases Object of Cases
 * @see Cases
 * @param state Current State
 * @param type type of case
 */
const switchcase: Switchcase = (cases, state, type) => {
  let _type = type;

  return _type in cases ? cases[_type] : state;
};

/**
 * Either executes case function, or returns current state
 *
 * @see switchcase
 * @param f Either case or current state
 * @param state Current state
 * @param payload payload
 */
const executeIfFunction: ExecuteIfFunction = (f, state, payload) => (f instanceof Function ? f(payload, state) : state);

/**
 * Returns the result of executeIfFunction call combined with switchcase result.
 * In short - return state, either new or current.
 *
 * @see switchcase
 * @see executeIfFunction
 * @param cases
 * @param state
 * @param type
 * @param payload
 */
const switchcaseF: SwitchcaseF = <S, P>(cases: Cases<S, P>, state: S, type: string, payload: P) =>
  executeIfFunction<S, P>(switchcase<S, P>(cases, state, type), state, payload);

/**
 * This nice function is a reducer on some steroids for performance optimisation
 * purposes.
 *
 * Instead of using good old switch/case, you pass and object of reducer
 * switch cases into this function, under the hood magic decides if any case should
 * be called, or if default should be returned.
 *
 * @param defaultState Default state
 * @param cases Object of cases
 * @see Cases
 * @template S State interface
 * @template P payload interface
 * @returns S
 */
export const reducer: Reducer = <S, P>(defaultState: S, cases: Cases<S, P>) => (
  state: S = defaultState,
  { type, payload }: Action<P>,
) => switchcaseF<S, P>(cases, state, type, payload);
