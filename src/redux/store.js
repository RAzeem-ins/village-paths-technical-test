import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducers'
import rootSaga from './actions/rootSaga';

export default function configureAppStore(preloadedState) {

  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  })
  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/rootReducers', () => store.replaceReducer(rootReducer))
  }
  return store
}
