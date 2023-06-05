import { gql } from '../utils'

export default gql`
  type Query {
    tweets: [Tweet]
    tweetList(authorId: ID!): [Tweet]
  }
  type Tweet {
    id: ID
    authorId: ID
    author: User
    createdAt: String
    updatedAt: String
    content: Content
    reactions: Reactions
    hashtags: [String]
    mentions: [String]
  }
  type Content {
    text: String
    media: [String]
  }
  type Reactions {
    like: Reaction
    comments: Reaction
    shares: Reaction
    retweets: Reaction
  }
  type Reaction {
    count: Int
    users: [User]
  }
`
