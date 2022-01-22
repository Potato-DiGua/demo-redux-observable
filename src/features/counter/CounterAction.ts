import { createAction } from "redux-actions";
import { createActionTypes } from "../../Utils/ActionHelper";

export const CounterTypes = createActionTypes(
  [
    "increment",
    "decrement",
    "incrementByAmount",
    "incrementAsync",
    "incrementIfOdd",
    "cancel",
  ],
  "Counter/"
);
export const increment = createAction(CounterTypes.increment);
export const decrement = createAction(CounterTypes.decrement);

export const incrementByAmount = createAction(
  CounterTypes.incrementByAmount,
  (amount: number) => amount
);

export const incrementAsync = createAction(
  CounterTypes.incrementAsync,
  (amount: number) => amount
);

export const incrementIfOdd = createAction(
  CounterTypes.incrementIfOdd,
  (amount: number) => amount
);

export const cancel = createAction(CounterTypes.cancel);
