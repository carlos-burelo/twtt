// # Tweet interfaces
export interface MongoTimestamps {
  createdAt: string
  updatedAt: string
}

export interface Tweet extends MongoTimestamps {
  id: string
  author: User
  authorId: string
  content: Content
  reactions: Reactions
  hashtags: string[]
  mentions: string[]
}
export interface Content {
  text: string
  media: string[]
}

export interface Reactions {
  like: Reaction
  comments: Reaction
  shares: Reaction
  retweets: Reaction
}
interface Reaction {
  count: number
  users: User[]
}
interface TweetInput
  extends Omit<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }

// # User interfaces

export interface User extends MongoTimestamps {
  id: string
  avatar: string
  displayName: string
  userName: string
  bio: string
  website?: string
  following: User[]
  followers: User[]
}
interface UserInput
  extends Omit<User, 'id' | 'createdAt' | 'following' | 'followers'> { }

// # Comment interfaces

export interface Comment extends MongoTimestamps {
  id: string
  author: User
  content: Content
  reactions: Reactions
}
interface CommentInput
  extends Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'reactions'> { }
