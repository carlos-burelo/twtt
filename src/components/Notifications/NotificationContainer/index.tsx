import Header from '#components/Header'
import NotificationCard from '#components/Notifications/NotificationCard'
import NotificationHeader from '#components/Notifications/NotificationHeader'
import _ from './NotificationContainer.module.scss'

export default function NotificationContainer() {
  return (
    <section className={_.container}>
      <Header title='Notificaciones' showBack>
        <NotificationHeader />
      </Header>
      <div className={_.notifications}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </section>
  )
}
