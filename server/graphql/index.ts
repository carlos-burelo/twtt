import UserTypeDefs from './typedefs/users'
import UserResolvers from './resolvers/users'
import TweetTypeDefs from './typedefs/tweets'
import TweetResolvers from './resolvers/tweets'

export const resolvers = [UserResolvers, TweetResolvers]
export const typeDefs = [UserTypeDefs, TweetTypeDefs]
