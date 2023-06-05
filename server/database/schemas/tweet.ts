import { Schema, model } from 'mongoose'
import { Tweet } from '#types'

const reactionProperties = {
  count: {
    type: Number,
    default: 0
  },
  users: [
    {
      ref: 'User',
      type: Schema.Types.ObjectId
    }
  ]
}

const TweetSchema = new Schema<Tweet>({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId
  },
  authorId: {
    required: true,
    type: String
  },
  content: {
    media: {
      type: [
        {
          type: String
        }
      ],
    },
    text: {
      required: true,
      type: String
    }
  },
  hashtags: [
    {
      type: String
    }
  ],
  mentions: [
    {
      type: String
    }
  ],
  reactions: {
    like: reactionProperties,
    comments: reactionProperties,
    shares: reactionProperties,
    retweets: reactionProperties
  }
}, {
  timestamps: true
})

export default model<Tweet>('Tweet', TweetSchema)