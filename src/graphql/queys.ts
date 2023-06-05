export const feedQuery = `tweets {
    id,
    author {
      displayName,
      avatar,
      userName
    }
    content {
      text
      media
    }
  }
`
export const userFeedQuery = `tweetList(authorId: $authorId) {
    id,
    author {
      displayName,
      avatar,
      userName
    }
    content {
      text
      media
    }
  }
`
export const followUsersQuery = `users {
  id
  userName
  displayName
  avatar
}  
`
export const userQuery = `user(userName: $userName) {
  id
  userName
  displayName
  avatar
  bio
  website
}`
