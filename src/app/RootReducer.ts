import { handleActions } from "redux-actions";
import CounterReducer from "../features/counter/CounterReducer";
import { defaultState } from "../State";

export const rootReducer = handleActions(
  Object.assign({}, CounterReducer),
  defaultState
);
