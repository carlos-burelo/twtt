import Layout from '#components/Layout'
import Sidebar from '#components/Sidebar'
import NotificationContainer from '#components/Notifications/NotificationContainer'
import type { NextPage } from 'next'

const Notifications: NextPage = () => {
  return (
    <Layout>
      <NotificationContainer />
      <Sidebar showFollow showSearch showTrends />
    </Layout>
  )
}

export default Notifications
