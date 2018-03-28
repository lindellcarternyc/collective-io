// import { User, AuthError } from './constants'
import { UserType } from '../../constants/user'
import { AuthError } from './constants'

export interface AuthState {
  isLoading: boolean
  user: UserType | null
  error: AuthError | null
}

export const InitialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null
}