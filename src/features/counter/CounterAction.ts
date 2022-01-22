import { createAction } from "@reduxjs/toolkit";
import { createActions, handleActions, combineActions } from "redux-actions";
import { createActionTypes } from "../../Utils/ActionHelper";

const defaultState = { counter: 10 };

export const CounterTypes = createActionTypes(['increment', 'decrement', 'incrementByAmount'],'Counter/')
export const increment = createAction(CounterTypes.increment)
export const decrement = createAction(CounterTypes.decrement);
export const incrementByAmount = createAction(CounterTypes.incrementByAmount)