import { Reducer, combineReducers } from 'redux'
import { StoreState } from './state'

import { authReducer } from './auth/reducer'
import { performanceReducer } from './performances/reducer'

export const rootReducer: Reducer<StoreState> = combineReducers({ 
  auth: authReducer,
  performances: performanceReducer
})