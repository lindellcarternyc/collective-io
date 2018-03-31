import { getUserById } from '../../data/user-databse'
import { User } from '../../constants/user'

export const mapUserIdsToSingerObjects = (
  userIds: string[], 
  currentUser: User | null = null, 
  callback?: (userId: string) => void
): { id: string, name: string, action?: () => void }[] => {
  return userIds.map(id => {
    if ( currentUser !== null && callback !== undefined) {
      if ( id === currentUser.id ) {
        return {
          id,
          name: currentUser.fullname,
          action: () => {
            callback(currentUser.id)
          }
        }
      }
    }
    return {
      id,
      name: getUserById(id).fullname
    }
  })
}