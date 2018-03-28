import { UserType } from '../constants/user'

const USERS: { [id: string]: UserType } = {
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
  },
  'c': {
    id: 'c',
    email: 'lindellcarternyc@gmail.com',
    firstName: 'Lindell',
    lastName: 'Carter',
    password: 'password1'
  }
}

export const getAllUsers = (): Promise<UserType[]> => {
  return new Promise((resolve, reject) => {
    const users = Object.keys(USERS).map(id => USERS[id])
    resolve(users)
  })
}

export const getUserWithEmailAndPassword = (email: string, password: string): Promise<UserType> => {
  return new Promise((resolve, reject) => {
    getAllUsers().then(
      users => {
        const withEmail = users.filter(user => user.email === email)
        if (withEmail.length !== 1) {
          reject('Email error')
        } else {
          const user = withEmail[0]
          if (user.password === password) {
            resolve(user)
          } else {
            reject('Invalid password')
          }
        }
      }
    ).catch(err => {
      throw new Error(err)
    })
  })
}