import query, { userQuery } from '#graphql/client'
import useWindowSize from '#hooks/useWindowSize'
import { User } from '#types'
import Link from 'next/link'
import { useState } from 'react'
import FollowCard from '../Follow/FollowCard'
import _ from './UserName.module.scss'

interface Props {
  id: string
  hideCard?: boolean
}

type UserCard = Pick<User, 'avatar' | 'bio' | 'displayName' | 'userName'>

export default function UserName ({ id, hideCard }: Props) {
  const [user, setUser] = useState<UserCard>({
    avatar: '/profile.png',
    bio: '',
    displayName: '',
    userName: '',
  })
  const [showInfo, setShowInfo] = useState(false)
  const { height } = useWindowSize()
  const [positionUp, setPositionUp] = useState(false)
  const handleInfoPosition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const Limit = 300 + 70
    let positionUp = false
    const mouse = { x: e.clientX, y: e.clientY }
    if (mouse.y + Limit > height) positionUp = true
    setPositionUp(positionUp)
  }
  if (hideCard != true && showInfo && user.userName !== id) {
    query(userQuery, { userName: id }).then(data => {
      if (data) setUser(data.user)
    })
  }
  return (
    <div className={_.link}>
      <Link href={`/${id}`}>
        <a
          className={_.username}
          onMouseMove={hideCard ? undefined : handleInfoPosition}
          onMouseEnter={hideCard ? undefined : () => setShowInfo(true)}
          onMouseLeave={hideCard ? undefined : () => setShowInfo(false)}
        >
          @{id}
        </a>
      </Link>
      {showInfo && (
        <FollowCard top={positionUp} onHide={setShowInfo} {...user} />
      )}
    </div>
  )
}
