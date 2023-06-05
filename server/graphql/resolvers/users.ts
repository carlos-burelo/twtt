import { users } from '#mocks/user'
import { User } from '#types'

export default {
  Query: {
    users: async (): Promise<User[]> => users,
    user: async (_: any, args: { userName: string }): Promise<User | null> => {
      return users.find(user => user.userName === args.userName) || null
    },
  },
}
