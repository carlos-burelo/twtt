export const feedQuery = `query {
  tweets {
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
}
`
export const userFeedQuery = `query {
  tweetList(authorId: $authorId) {
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
}
`
export const followUsersQuery = `query {
  users {
    id
    userName
    displayName
    avatar
  } 
} 
`
export const userQuery = `query MyQuery($userName: String!) {
  user(userName: $userName) {
    id
    userName
    displayName
    avatar
    bio
    website
  }
}`
