import { ThunkAction, Action } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./RootReducer";
import { rootEpic } from "./RootEpics";
import logger from "redux-logger";

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
  applyMiddleware(logger)
);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
