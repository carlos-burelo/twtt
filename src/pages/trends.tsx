import Layout from '#components/Layout'
import Sidebar from '#components/Sidebar'
import TrendsContainer from '#components/Trends/TrendsContainer'
import type { NextPage } from 'next'

const Trends: NextPage = () => {
  return (
    <Layout>
      <TrendsContainer />
      <Sidebar showFollow />
    </Layout>
  )
}

export default Trends
