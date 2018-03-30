import { Reducer } from 'redux'
import { PerformanceState, InitialPerformanceState } from './state'
import { 
  JOIN_CAST_TYPE,
  JOIN_COVERS_TYPE,
  JoinPerformanceAction 
} from './action-types'

export const performanceReducer: Reducer<PerformanceState> = (
  state: PerformanceState = InitialPerformanceState, action: JoinPerformanceAction
): PerformanceState => {
  switch (action.type) {
    case JOIN_CAST_TYPE:
      const castPerformance = state[action.payload.performanceId]
      const cast = [ ...castPerformance.cast, action.payload.userId ]
      return {
        ...state,
        [action.payload.performanceId]: {
          ...castPerformance, cast
        }
      }
    case JOIN_COVERS_TYPE:
      const coversPerformance = state[action.payload.performanceId]
      const covers = [ ...coversPerformance.covers, action.payload.userId]
      return {
        ...state,
        [action.payload.performanceId]: {
          ...coversPerformance, covers
        }
      }
    default:
      return state
  }
}