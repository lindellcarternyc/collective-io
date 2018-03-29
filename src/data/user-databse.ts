import { User } from '../constants/user'

let UserDatabse: { [id: string]: User } = {
  'a': new User({
    id: 'a',
    firstName: 'Rachel', lastName: 'Hippert',
    email: 'rachel.email', password: 'password'
  }),
  'b': new User({
    id: 'b',
    firstName: 'Jose', lastName: 'Heredia',
    email: 'jose.email', password: 'password'
  }),
  'c': new User({
    id: 'c',
    firstName: 'Alexis', lastName: 'Cregger',
    email: 'alexis.email', password: 'password'
  }),
  'd': new User({
    id: 'd',
    firstName: 'Jonathan', lastName: 'Green',
    email: 'jonathan.email', password: 'password'
  }),
  'e': new User({
    id: 'e',
    firstName: 'Allegra', lastName: 'Durante',
    email: 'allegra.email', password: 'password'
  }),
  'f': new User({
    id: 'f',
    firstName: 'Omar', lastName: 'Bowey',
    email: 'omar.email', password: 'password'
  }),
  'g': new User({
    id: 'g',
    firstName: 'Maurio', lastName: 'Hines',
    email: 'maurio.email', password: 'password'
  }),
  'h': new User({
    id: 'h',
    firstName: 'Ziwen', lastName: 'Chen',
    email: 'ziwen.email', password: 'password'
  }),
  'i': new User({
    id: 'i',
    firstName: 'Abby', lastName: 'Wright',
    email: 'abby.email', password: 'password'
  }),
  'j': new User({
    id: 'j',
    firstName: 'Cassandra', lastName: 'Douglass',
    email: 'cassandra.email', password: 'password'
  }),
  'k': new User({
    id: 'k',
    firstName: 'Anna', lastName: 'Viemeister',
    email: 'anna.email', password: 'password'
  }),
  'l': new User({
    id: 'l',
    firstName: 'Lindell', lastName: 'Carter',
    email: 'lindell.email', password: 'password'
  }),
  'm': new User({
    id: 'm',
    firstName: 'Ganson', lastName: 'Salmon',
    email: 'ganson.email', password: 'password'
  })
}

export const copyDatabase = (): { [id: string]: User } => {
  return { ...UserDatabse }
}
export const userList = (): User[] => {
  return Object.keys(UserDatabse).map(id => UserDatabse[id])
}
export const getUserById = (id: string) => {
  return UserDatabse[id]
}

export const getUserByEmail = (email: string): Promise<User> => {
  return new Promise((res, rej) => {
    const filtered = userList().filter(u => u.email === email)
    if (filtered.length === 1) {
      res(filtered[0])
    } else {
      rej('User Email Error')
    }
  })
}
