import Avatar from '#components/Avatar'
import Button from '#components/Button'
import TextInput from '#components/Input/TextInput'
import { userMock } from '#mocks/user'
import TweetActions from '../TweetActions'
import _ from './TweetBox.module.scss'

export default function TweetBox() {
  return (
    <div className={_.tweetBox}>
      <div className={_.user}>
        <Avatar src={userMock.avatar} />
      </div>
      <div className={_.tweetArea}>
        <div className={_.input}>
          <TextInput placeholder='Que estas pensando?' />
        </div>
        <div className={_.actions}>
          <TweetActions />
          <Button text='Twittear' primary />
        </div>
      </div>
    </div>
  )
}
