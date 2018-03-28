import { AuthState, InitialAuthState } from './state'
import { Reducer } from 'redux'

import { 
  SignInStartAction, SIGN_IN_START_TYPE,
  SignInSuccessAction, SIGN_IN_SUCCESS_TYPE, 
  SignOutAction, SIGN_OUT_TYPE
} from './action-types'

export const authReducer: Reducer<AuthState> = (
  state: AuthState = InitialAuthState, 
  action: SignInStartAction | SignInSuccessAction | SignOutAction): AuthState => {
    switch ( action.type ) {
      case SIGN_IN_START_TYPE:
        return {
          ...state,
          user: null,
          error: null,
          isLoading: true
        }
      case SIGN_IN_SUCCESS_TYPE:
        return {
          ...state,
          user: action.payload,
          error: null,
          isLoading: false
        }
      case SIGN_OUT_TYPE:
        return {
          ...state,
          user: null,
          error: null,
          isLoading: false
        }
      default:
        return state
    }
} 