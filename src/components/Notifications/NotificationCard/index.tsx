import Avatar from '#components/Avatar'
import { userMock } from '#mocks/user'
import _ from './NotificationCard.module.scss'

export default function NotificationCard() {
  return (
    <li className={_.notification}>
      <div className={_.type}></div>
      <div className={_.avatar}>
        <Avatar src={userMock.avatar} size={32} />
      </div>
      <div className={_.message}>
        <div className={_.name}>Jhon Doe</div>
        <p className={_.text}>te ha seguido</p>
      </div>
    </li>
  )
}
