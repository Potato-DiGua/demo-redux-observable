import { CounterTypes } from "./CounterAction";
import { AppReducerMap } from "../../app/store";

const CounterReducer: AppReducerMap = {
  [CounterTypes.increment]: (state) => {
    console.log(state);

    return state.update("value", (value) => value + 1);
  },
  [CounterTypes.decrement]: (state) => {
    return state.update("value", (value) => value - 1);
  },
  [CounterTypes.incrementByAmount]: (
    state,
    { payload }: { payload: number }
  ) => {
    return state.update("value", (value) => value + payload);
  },
  [CounterTypes.incrementIfOdd]: (state, { payload }: { payload: number }) => {
    return state.update("value", (value) => {
      if (value % 2 === 1) {
        return value + payload;
      }
      return value;
    });
  },
};

export default CounterReducer;
