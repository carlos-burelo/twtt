import { host } from '#shared/env'

import { GraphQLClient } from 'graphql-request'

const API_URL = `${host}/api/graphql`
console.log('API_URL -->', API_URL)
export const gqlClient = new GraphQLClient(API_URL, {
  headers: {
    'Content-Type': 'application/json',
  }
})

export default async function gql<T = any>(
  query: string,
  variables?: any
): Promise<any> {

  const client = new GraphQLClient(`${host}/api/graphql`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const res = await client.request(query, variables)
  console.log('res -->', res)
  return res
}
export * from './queries'
