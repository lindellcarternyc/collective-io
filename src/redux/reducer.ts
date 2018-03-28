import { Reducer, combineReducers } from 'redux'
import { StoreState } from './state'

import { authReducer } from './auth/reducer'

export const rootReducer: Reducer<StoreState> = combineReducers({ 
  auth: authReducer
})