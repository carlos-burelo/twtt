import { gql } from '../utils'

export default gql`
  type Query {
    users: [User]
    user(userName: String!): User
  }
  type User {
    id: String
    avatar: String
    displayName: String
    userName: String
    bio: String
    createdAt: String
    website: String
    following: [User]
    followers: [User]
  }
`
