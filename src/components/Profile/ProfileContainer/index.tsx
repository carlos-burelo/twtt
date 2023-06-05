import Header from '#components/Header'
import ProfileInfo from '#components/Profile/ProfileInfo'
import _ from './ProfileContainer.module.scss'

export default function ProfileContainer() {
  return (
    <div className={_.container}>
      <Header title='Carlos Burelo' subtitle='10 tweets' showBack />
      <ProfileInfo />
    </div>
  )
}
