import { Schema, model } from 'mongoose'
import { User } from '#types'

const userSchema = new Schema<User>({
  displayName: {
    required: true,
    type: String
  },
  userName: {
    required: true,
    unique: true,
    type: String
  },
  avatar: {
    type: String
  },
  bio: {
    type: String
  },
  website: {
    type: String
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  timestamps: true
})

export default model<User>('User', userSchema)