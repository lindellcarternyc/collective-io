import { AuthState } from './auth/state'
import { PerformanceState } from './performances/state'

export interface StoreState { 
  auth: AuthState,
  performances: PerformanceState
}