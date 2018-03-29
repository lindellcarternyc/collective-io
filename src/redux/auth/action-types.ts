import { User } from '../../constants/user'
import { AuthError } from './constants'

export const SIGN_IN_START_TYPE = 'SIGN_IN_START_TYPE'
export type SIGN_IN_START_TYPE = typeof SIGN_IN_START_TYPE
export interface SignInStartAction {
  type: SIGN_IN_START_TYPE
}

export const SIGN_IN_SUCCESS_TYPE = 'SIGN_IN_SUCCESS_TYPE'
export type SIGN_IN_SUCCESS_TYPE = typeof SIGN_IN_SUCCESS_TYPE
export interface SignInSuccessAction {
  type: SIGN_IN_SUCCESS_TYPE,
  payload: User
}

export const SIGN_IN_FAILURE_TYPE = 'SIGN_IN_FAILURE_TYPE'
export type SIGN_IN_FAILURE_TYPE = typeof SIGN_IN_FAILURE_TYPE
export interface SignInFailureAction {
  type: SIGN_IN_FAILURE_TYPE,
  payload: AuthError
}

export const SIGN_OUT_TYPE = 'SIGN_OUT_ACTION'
export type SIGN_OUT_TYPE = typeof SIGN_OUT_TYPE
export interface SignOutAction {
  type: SIGN_OUT_TYPE
}