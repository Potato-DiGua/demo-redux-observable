import { createActions, handleActions, combineActions } from 'redux-actions';

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);

export default reducer;