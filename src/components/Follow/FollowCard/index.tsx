import Avatar from '#components/Avatar'
import Button from '#components/Button'
import { User } from '#types'
import _ from './FollowCard.module.scss'

interface Props
  extends Pick<User, 'avatar' | 'bio' | 'displayName' | 'userName'> {
  top: boolean
  onHide: (value: boolean) => void
}

export default function FollowCard({
  top,
  onHide,
  avatar,
  bio,
  displayName,
  userName,
}: Props) {
  return (
    <div
      className={_.followCard}
      onMouseLeave={() => setTimeout(() => onHide(false), 300)}
      onMouseEnter={() => onHide(true)}
      style={{
        bottom: top ? '20px' : '-220px',
      }}
    >
      <div className={_.header}>
        <div className={_.avatar}>
          <Avatar src={avatar} size={80} />
        </div>
        <div className={_.btn}>
          <Button text='Seguir' />
        </div>
      </div>
      <div className={_.body}>
        <div className={_.displayNames}>
          <h2 className={_.name}>{displayName}</h2>
          <p className={_.usernname}>{userName}</p>
        </div>
        <p className={_.bio}>{bio}</p>
        <div className={_.otherInfo}>
          <div className={_.following}>
            <span className={_.followCount}>10</span>
            <span className={_.followText}>Siguiendo</span>
          </div>
          <div className={_.followers}></div>
          <span className={_.followCount}>10</span>
          <span className={_.followText}>Seguidores</span>
        </div>
      </div>
    </div>
  )
}
