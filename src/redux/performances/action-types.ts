export const JOIN_CAST_TYPE = 'JOIN_CAST_TYPE'
export type JOIN_CAST_TYPE = typeof JOIN_CAST_TYPE
export interface JoinCastAction {
  type: JOIN_CAST_TYPE
  payload: {
    performanceId: string
    userId: string
  }
}

export const JOIN_COVERS_TYPE = 'JOIN_COVERS_TYPE'
export type JOIN_COVERS_TYPE = typeof JOIN_COVERS_TYPE
export interface JoinCoversAction {
  type: JOIN_COVERS_TYPE
  payload: {
    performanceId: string
    userId: string
  }
}

export type JoinPerformanceAction = JoinCastAction | JoinCoversAction