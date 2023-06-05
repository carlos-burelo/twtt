import Layout from '#components/Layout'
import ListsContainer from '#components/Lists/ListContainer'
import Sidebar from '#components/Sidebar'
import type { NextPage } from 'next'

const Lists: NextPage = () => {
  return (
    <Layout>
      <ListsContainer />
      <Sidebar showFollow showSearch showTrends />
    </Layout>
  )
}

export default Lists
