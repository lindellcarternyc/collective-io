import { User } from '../../constants/user'
import { AuthError } from './constants'

import { getUserById } from '../../data/user-databse'

export interface AuthState {
  isLoading: boolean
  user: User | null
  error: AuthError | null
}

export const InitialAuthState: AuthState = {
  isLoading: false,
  user: getUserById('l'),
  error: null
}