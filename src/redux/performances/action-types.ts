interface PerformanceActionPayload {
  performanceId: string
  userId: string
}

export const JOIN_CAST_TYPE = 'JOIN_CAST_TYPE'
export type JOIN_CAST_TYPE = typeof JOIN_CAST_TYPE
export interface JoinCastAction {
  type: JOIN_CAST_TYPE
  payload: PerformanceActionPayload
}

export const JOIN_COVERS_TYPE = 'JOIN_COVERS_TYPE'
export type JOIN_COVERS_TYPE = typeof JOIN_COVERS_TYPE
export interface JoinCoversAction {
  type: JOIN_COVERS_TYPE
  payload: PerformanceActionPayload
}

export type JoinPerformanceAction = JoinCastAction | JoinCoversAction

export const LEAVE_CAST_TYPE = 'LEAVE_CAST_TYPE'
export type LEAVE_CAST_TYPE = typeof LEAVE_CAST_TYPE
export interface LeaveCastAction {
  type: LEAVE_CAST_TYPE
  payload: PerformanceActionPayload
}

export const LEAVE_COVERS_TYPE = 'LEAVE_COVERS_TYPE'
export type LEAVE_COVERS_TYPE = typeof LEAVE_COVERS_TYPE
export interface LeaveCoversAction {
  type: LEAVE_COVERS_TYPE
  payload: PerformanceActionPayload
}

export type LeavePorformanceAction = LeaveCastAction | LeaveCoversAction

export const ADD_PERFORMANCE_TYPE = 'ADD_PERFORMANCE_TYPE'
export type ADD_PERFORMANCE_TYPE = typeof ADD_PERFORMANCE_TYPE
export interface AddPerformanceAction {
  type: ADD_PERFORMANCE_TYPE,
  payload: {
    date: string
    startTime: string
    endTime: string
    location: string
  }
}

export type PerformanceAction = JoinPerformanceAction | LeavePorformanceAction | AddPerformanceAction