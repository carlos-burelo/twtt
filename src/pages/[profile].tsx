import Layout from '#components/Layout'
import ProfileContainer from '#components/Profile/ProfileContainer'
import Sidebar from '#components/Sidebar'
import gql, { userQuery } from '#graphql/client'
import { User } from '#shared/types'
import type { GetServerSideProps, NextPage } from 'next'

interface Props {
  user: User
}

const Lists: NextPage<Props> = ({ }) => {
  return (
    <Layout>
      <ProfileContainer />
      <Sidebar showFollow showSearch showTrends />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { profile } = params as { profile: string }
  const data = await gql<User>(userQuery, { userName: profile })
  return {
    props: {
      user: data.user,
    },
  }
}

export default Lists
