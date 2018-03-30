import { 
  JOIN_CAST_TYPE, JoinCastAction,
  JOIN_COVERS_TYPE, JoinCoversAction
} from './action-types'

export const joinCast = (performanceId: string, userId: string): JoinCastAction => {
  return {
    type: JOIN_CAST_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}

export const joinCovers = (performanceId: string, userId: string): JoinCoversAction => {
  return {
    type: JOIN_COVERS_TYPE,
    payload: {
      performanceId,
      userId
    }
  }
}