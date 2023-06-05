import UserName from '#components/UserName'
import { MoreIcon } from '#shared/icons'
import _ from './TweetHeader.module.scss'
import { User } from '#types'

interface Props extends Pick<User, 'displayName' | 'userName'> {
  createdAt: string // tweet createdAt
}

export default function TweetHeader({
  displayName,
  userName,
  createdAt,
}: Props) {
  return (
    <div className={_.tweetHeader}>
      <div className={_.tweetData}>
        <div className={_.tweetAuthor}>
          <span className={_.tweetAuthorName}>{displayName}</span>
          <UserName id={userName} />
        </div>
        <span className={_.tweetDate}>{createdAt}</span>
      </div>
      <div className={_.more}>
        <MoreIcon />
      </div>
    </div>
  )
}
