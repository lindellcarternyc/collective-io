import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import { StoreState } from './state'
import { rootReducer } from './reducer'

export const initStore = () => {
  const store = createStore<StoreState>(
    rootReducer,
    applyMiddleware(
      ReduxThunk,
      logger
    )
  )
  return store
}