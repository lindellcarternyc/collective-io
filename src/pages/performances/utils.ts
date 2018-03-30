import { getUserById } from '../../data/user-databse'

export const mapUserIdsToSingerObjects = (userIds: string[]): { id: string, name: string }[] => {
  return userIds.map(id => {
    return {
      id,
      name: getUserById(id).fullname
    }
  })
}