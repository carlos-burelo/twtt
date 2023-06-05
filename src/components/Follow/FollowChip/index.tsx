import Avatar from '#components/Avatar'
import Button from '#components/Button'
import UserName from '#components/UserName'
import _ from './FollowChip.module.scss'

interface Props {
  userName: string
  avatar: string
  displayName: string
}

export default function FollowChip({ avatar, displayName, userName }: Props) {
  return (
    <div className={_.followChip}>
      <div className={_.user}>
        <div className={_.avatar}>
          <Avatar src={avatar} />
        </div>
        <div className={_.data}>
          <div className={_.name}>{displayName}</div>
          <UserName id={userName} />
        </div>
      </div>
      <Button text='seguir' />
    </div>
  )
}
