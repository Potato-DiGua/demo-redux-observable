import { combineEpics, ofType } from "redux-observable";
import { CounterTypes, incrementByAmount } from "./CounterAction";
import { defer, first, map, mergeMap, switchMap, takeUntil, tap } from "rxjs";
import { fetchCount } from "../../Service";
import { AppEpic, dispatch } from "../../app/store";

const incrementAsyncEpic: AppEpic = (action$, state$) =>
  action$.pipe(
    ofType(CounterTypes.incrementAsync),
    switchMap((action: { payload: number }) =>
      defer(() => fetchCount(action?.payload)).pipe(
        takeUntil(action$.pipe(ofType(CounterTypes.cancel))),
        map((resp) => {
          return resp.data;
        }),
        tap((value) => {
          dispatch(incrementByAmount(value));
        })
      )
    ),
    mergeMap(() => state$.pipe(first(), tap(console.log)))
  );

const logEpic: AppEpic = (action$, state$) =>
  action$.pipe(mergeMap(() => state$.pipe(first(), tap(console.log))));

export const CounterEpics = combineEpics(incrementAsyncEpic, logEpic);
