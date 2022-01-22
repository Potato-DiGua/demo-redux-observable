import { Action } from "redux";
import { combineEpics, StateObservable } from "redux-observable";
import { catchError, filter, Observable } from "rxjs";
import { CounterEpics } from "../features/counter/CounterEpic";

// export const rootEpic = combineEpics(CounterEpics);

export const rootEpic = (
  action$: Observable<any>,
  store$: StateObservable<any>,
  dependencies: any
) =>
  combineEpics(CounterEpics)(action$, store$, dependencies).pipe(
    filter((value: Action<string>) => value != null && Boolean(value.type)),
    catchError((error, source) => {
      console.warn(error);
      return source;
    })
  );
