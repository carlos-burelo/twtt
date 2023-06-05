import { tweets } from '#mocks/tweets'
import { users } from '#mocks/user'
import { Tweet, User } from '#types'

export default {
  Query: {
    tweets: async () => tweets,
    tweetList: async (_: any, args: { authorId: string }): Promise<Tweet[]> => {
      const { authorId } = args
      return tweets.filter(tweet => tweet.authorId === authorId)
    },
  },
  Tweet: {
    author: async (tweet: Tweet): Promise<User | null> => {
      return users.find(user => user.id === tweet.authorId) || null
    },
  },
}
