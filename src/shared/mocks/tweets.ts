import { Tweet } from '#types'

export const tweets: Tweet[] = [
  {
    id: 'tw-1',
    authorId: 'user-1',
    author: {} as any,
    createdAt: new Date('2020-01-01').toDateString(),
    updatedAt: new Date('2020-01-01').toDateString(),
    reactions: {
      like: {
        count: 1,
        users: [],
      },
      comments: {
        count: 1,
        users: [],
      },
      shares: {
        count: 1,
        users: [],
      },
      retweets: {
        count: 1,
        users: [],
      },
    },
    hashtags: ['#hello', '#world'],
    mentions: ['https://godofredo.ninja/content/images/2020/05/deno-bg.jpg'],
    content: {
      media: [],
      text: 'Hello world! #hello #world\n ![deno](https://godofredo.ninja/content/images/2020/05/deno-bg.jpg)',
    },
  },
  {
    id: 'tw-2',
    authorId: 'user-2',
    author: {} as any,
    createdAt: new Date('2020-01-01').toDateString(),
    updatedAt: new Date('2020-01-01').toDateString(),
    reactions: {
      like: {
        count: 1,
        users: [],
      },
      comments: {
        count: 1,
        users: [],
      },
      shares: {
        count: 1,
        users: [],
      },
      retweets: {
        count: 1,
        users: [],
      },
    },
    hashtags: ['#hello', '#world'],
    mentions: [],
    content: {
      media: [],
      text: 'Hello world! #hello #world @user1',
    },
  },
  {
    id: 'tw-3',
    authorId: 'user-1',
    author: {} as any,
    createdAt: new Date('2020-01-01').toDateString(),
    updatedAt: new Date('2020-01-01').toDateString(),
    reactions: {
      like: {
        count: 1,
        users: [],
      },
      comments: {
        count: 1,
        users: [],
      },
      shares: {
        count: 1,
        users: [],
      },
      retweets: {
        count: 1,
        users: [],
      },
    },
    hashtags: ['#hello', '#world'],
    mentions: [],
    content: {
      media: [],
      text: 'Hello world! #hello #world',
    },
  },
  {
    id: 'tw-4',
    authorId: 'user-3',
    author: {} as any,
    createdAt: new Date('2020-01-01').toDateString(),
    updatedAt: new Date('2020-01-01').toDateString(),
    reactions: {
      like: {
        count: 1,
        users: [],
      },
      comments: {
        count: 1,
        users: [],
      },
      shares: {
        count: 1,
        users: [],
      },
      retweets: {
        count: 1,
        users: [],
      },
    },
    hashtags: ['#hello', '#world'],
    mentions: [],
    content: {
      media: [],
      text: 'Hello world! #hello #world',
    },
  },
]
