import { host } from '#shared/env'

export default async function gql<T = any>(
  query: string,
  variables?: any
): Promise<{ [k: string]: T }> {
  let userQuery = `
    query {
      ${query}
    }
  `
  if (variables) {
    for (const key in variables) {
      const regex = new RegExp(`\\$${key}`, 'g')
      userQuery = userQuery.replace(regex, `"${variables[key]}"`)
    }
  }
  const fetcher = async (query: string, variables?: any) =>
    await fetch(`${host}/api/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    }).then(res => res.json())
  const response = await fetcher(userQuery, variables)
  return response.data || null
}
export * from './queys'
