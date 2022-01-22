import { createEpicMiddleware, Epic } from "redux-observable";
import { createStore, applyMiddleware, Dispatch, Action } from "redux";
import { rootReducer } from "./RootReducer";
import { rootEpic } from "./RootEpics";
import logger from "redux-logger";
import { StateType } from "../State";
import { ReducerMap } from "redux-actions";

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));
epicMiddleware.run(rootEpic);

const dispatch = store.dispatch as Dispatch<Action<string>>;

export { store, dispatch };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppReducerMap = ReducerMap<StateType, any>;
export type AppEpic = Epic<any, any, StateType, any>;
