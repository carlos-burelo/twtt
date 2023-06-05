import { useEffect, useState } from 'react'

export default function useQuery(query: string, variables?: any) {
  let userQuery = `
    query {
      ${query}
    }
  `

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        if (variables) {
          for (const key in variables) {
            const regex = new RegExp(`\\$${key}`, 'g')
            userQuery = userQuery.replace(regex, `"${variables[key]}"`)
          }
        }
        const response = await fetch('/api/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: userQuery, variables }),
        })
        const json = await response.json()
        setData(json.data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return { loading, error, data }
}
