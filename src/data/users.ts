import { UserType } from '../constants/user'

export const USERS: { [id: string]: UserType } = {
  'a': {
    id: 'a',
    email: 'email1',
    password: 'password1',
    firstName: 'Lindell',
    lastName: 'Carter'
  },
  'b': {
    id: 'b',
    email: 'email2',
    firstName: 'Jose',
    lastName: 'Heredia',
    password: 'password2'
  }
}

export const getAllUsers = () => USERS
export const getUserById = (id: string) => {
  return USERS[id]
}