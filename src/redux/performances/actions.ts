import { 
  JOIN_CAST_TYPE, JoinCastAction,
  JOIN_COVERS_TYPE, JoinCoversAction,
  JoinPerformanceAction,
  LEAVE_CAST_TYPE, LeaveCastAction,
  LEAVE_COVERS_TYPE, LeaveCoversAction,
  LeavePorformanceAction,
  ADD_PERFORMANCE_TYPE,
  AddPerformanceAction
} from './action-types'

const joinCast = (performanceId: string, userId: string): JoinCastAction => {
  return {
    type: JOIN_CAST_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}

const joinCovers = (performanceId: string, userId: string): JoinCoversAction => {
  return {
    type: JOIN_COVERS_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}

export const joinPerformance = (
  performanceId: string, userId: string, mode: 'cast' | 'covers'
): JoinPerformanceAction => {
  return mode === 'cast'
  ? joinCast(performanceId, userId)
  : joinCovers(performanceId, userId)
}

const leaveCast = (performanceId: string, userId: string): LeaveCastAction => {
  return {
    type: LEAVE_CAST_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}
const leaveCovers = (performanceId: string, userId: string): LeaveCoversAction => {
  return {
    type: LEAVE_COVERS_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}
export const leavePerformance = (
  performanceId: string, userId: string, mode: 'cast' | 'covers'
): LeavePorformanceAction => {
  if ( mode === 'cast') {
    return leaveCast(performanceId, userId)
  } else {
    return leaveCovers(performanceId, userId)
  }
}

export const addPerformance = 
(date: string, location: string, startTime: string, endTime: string): AddPerformanceAction => {
  return {
    type: ADD_PERFORMANCE_TYPE,
    payload: {
      date,
      location,
      startTime,
      endTime
    }
  }
}