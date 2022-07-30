import { Action, applyMiddleware, compose, createStore, MiddlewareAPI, PreloadedState, Store, StoreEnhancer } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import { ServiceAction } from './redux';

type ReduxAction<S> = { payload: S } & Action;

const persitConfig = {
  key: 'root',
  storage,
  whitelist: [
    'auth',
  ],
};

export function createReduxStore<S>(
  state: PreloadedState<S>,
  enhancers: StoreEnhancer[],
): Store<S> {
  let store: Store<S>;

  function reducer(state: S | undefined, action: ReduxAction<S>) {
    if (action.payload) {
      // eslint-disable-next-line
      state = action.payload;
    }
    return state as S;
  }

  function setState(payload: S, type: string = 'setState') {
    store.dispatch({ type: `${type} setState`, payload });
  }

  function logService(type: string, input: unknown) {
    store.dispatch({ type: `${type} call`, input });
  }

  function middleware({ dispatch, getState }: MiddlewareAPI) {
    return (next: any) => (action: S | undefined | ServiceAction<any>) => {
      if (typeof action === 'function') {
        // @ts-ignore
        return action({
          dispatch,
          getState,
          logService,
          setState,
        });
      }
      return next(action);
    };
  }

  const enhancersToCompose = [...enhancers, applyMiddleware(middleware)];
  const enhancer = compose(...enhancersToCompose) as StoreEnhancer;

  const persistedReducer = persistReducer(persitConfig, reducer);

  store = createStore<S & PersistPartial, ReduxAction<S>, {}, {}>(
    persistedReducer,
    state as PreloadedState<S & PersistPartial> | undefined,
    enhancer,
  ) as unknown as Store<S>;

  return store;
}
