// import { User, AuthError } from './constants'
import { User } from '../../constants/user'
import { AuthError } from './constants'

export interface AuthState {
  isLoading: boolean
  user: User | null
  error: AuthError | null
}

export const InitialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null
}