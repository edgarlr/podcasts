import useSWR from 'swr'
import { fetcher } from 'lib/utils'

export const useFetch = (url, section = null, limit = null) => {
  const fetcherWithSection = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((r) => r.body[section])

  const customFetcher = section ? fetcherWithSection : fetcher

  if (limit) url = `${url}&page[items]=${limit}`

  const { data, error } = useSWR(url, customFetcher)

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}
