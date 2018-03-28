import { Dispatch } from 'redux'
import { StoreState } from '../state'

import { 
  SIGN_IN_START_TYPE, SignInStartAction,
  SIGN_IN_SUCCESS_TYPE, SignInSuccessAction,
  SIGN_OUT_TYPE, SignOutAction,
  SIGN_IN_FAILURE_TYPE, SignInFailureAction
} from './action-types'
import { UserType } from '../../constants/user'
import { AuthError } from './constants'

export const signInStart = ():  SignInStartAction => {
  return {
    type: SIGN_IN_START_TYPE
  }
}

export const signInSuccess = (user: UserType): SignInSuccessAction => {
  return {
    type: SIGN_IN_SUCCESS_TYPE,
    payload: user
  }
}

export const signInFailure = (error: AuthError): SignInFailureAction => {
  return {
    type: SIGN_IN_FAILURE_TYPE,
    payload: error
  }
}

import { getUserWithEmailAndPassword } from '../../data/users'
export const signIn = (email: string, password: string) => {
  return function(dispatch: Dispatch<StoreState>) {
    dispatch(signInStart())

    // Try to get user
    getUserWithEmailAndPassword(email, password)
      // Success
      .then(user => {
        dispatch(signInSuccess(user))
      }).catch(err => {
        // Failure
        dispatch(signInFailure(err))
      })
  }
}

export const signOut = (): SignOutAction => {
  return {
    type: SIGN_OUT_TYPE
  }
}