import { User } from '#types'

export const users: User[] = [
  {
    id: 'user-1',
    avatar: '/profile.png',
    bio: 'I am a user',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
    displayName: 'User One',
    userName: 'user1',
    website: 'https://user1.com',
    followers: [],
    following: [],
  },
  {
    id: 'user-2',
    avatar: 'https://avatars.githubusercontent.com/u/22801514?v=4',
    bio: 'I am a user',
    updatedAt: '2020-01-01',
    createdAt: '2020-01-01',
    displayName: 'User Two',
    userName: 'user2',
    website: 'https://user1.com',
    followers: [],
    following: [],
  },
  {
    id: 'user-3',
    avatar: 'https://avatars.githubusercontent.com/u/45366419?v=4',
    updatedAt: '2020-01-01',
    bio: 'I am a user',
    createdAt: '2020-01-01',
    displayName: 'User Three',
    userName: 'user3',
    website: 'https://user1.com',
    followers: [],
    following: [],
  },
]

export const userMock: User = {
  avatar: '/profile.png',
  displayName: 'User One',
  userName: 'user1',
  website: 'https://user1.com',
  id: 'user-1',
  bio: 'I am a user',
  updatedAt: '2020-01-01',
  createdAt: '2020-01-01',
  followers: [],
  following: [],
}

export const tweetMock = {
  id: '1',
  image: 'https://pbs.twimg.com/media/FV34hOzXgAEekTg?format=jpg&name=small',
  raw: `Hello, world!\n![image](https://pbs.twimg.com/media/FV34hOzXgAEekTg?format=jpg&name=small)`,
}
export const listMock = {
  id: '1',
  image:
    'https://www.geekmi.news/__export/1636751568813/sites/debate/img/2021/11/12/nobara_jujutsu_kaisen_figura.jpg_976912859.jpg',
}
