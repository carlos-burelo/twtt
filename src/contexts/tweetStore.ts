import create from 'zustand'
import { Tweet } from '#types'

interface TweetStore {
  tweets: Tweet[]
  addTweets: (tweets: Tweet[]) => void
  addTweet: (tweet: Tweet) => void
  removeTweet: (id: string) => void
}

const tweetStore = create<TweetStore>(set => ({
  tweets: [],
  addTweet: tweet => set(state => ({ tweets: [...state.tweets, tweet] })),
  addTweets: tweets => set(state => ({ tweets: [...state.tweets, ...tweets] })),
  removeTweet: id =>
    set(state => ({ tweets: state.tweets.filter(tweet => tweet.id !== id) })),
}))

export default tweetStore
