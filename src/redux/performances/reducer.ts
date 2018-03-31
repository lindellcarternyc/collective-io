import { Reducer } from 'redux'
import { PerformanceState, InitialPerformanceState } from './state'
import { 
  JOIN_CAST_TYPE,
  JOIN_COVERS_TYPE,
  LEAVE_CAST_TYPE,
  LEAVE_COVERS_TYPE,
  PerformanceAction
} from './action-types'
// import { PerformanceType } from '../../constants/performance'

const joinCast = (state: PerformanceState, performanceId: string, userId: string): PerformanceState => {
  const performance = state[performanceId]
  const cast = performance.cast
  return {
    ...state,
    [performanceId]: {
      ...performance,
      cast: [ ...cast, userId ]
    }
  }
}
const joinCovers = (state: PerformanceState, performanceId: string, userId: string): PerformanceState => {
  const performance = state[performanceId]
  const covers = performance.covers
  return {
    ...state,
    [performanceId]: {
      ...performance,
      covers: [ ...covers, userId ]
    }
  }
}
const leaveCast = (state: PerformanceState, performanceId: string, userId: string): PerformanceState => {
  const performance = state[performanceId]
  const cast = performance.cast
  return {
    ...state,
    [performanceId]: {
      ...performance,
      cast: cast.filter(id => id !== userId)
    }
  }
}
const leaveCovers = (state: PerformanceState, performanceId: string, userId: string): PerformanceState => {
  const performance = state[performanceId]
  const covers = performance.covers
  return {
    ...state,
    [performanceId]: {
      ...performance,
      covers: covers.filter(id => id !== userId)
    }
  }
}

export const performanceReducer: Reducer<PerformanceState> = (
  state: PerformanceState = InitialPerformanceState, action: PerformanceAction
): PerformanceState => {
  switch (action.type) {
    case JOIN_CAST_TYPE:
      return joinCast(state, action.payload.performanceId, action.payload.userId)
    case JOIN_COVERS_TYPE:
      return joinCovers(state, action.payload.performanceId, action.payload.userId)
    case LEAVE_CAST_TYPE:
      return leaveCast(state, action.payload.performanceId, action.payload.userId)
    case LEAVE_COVERS_TYPE:
      return leaveCovers(state, action.payload.performanceId, action.payload.userId)
    default:
      return state
  }
}