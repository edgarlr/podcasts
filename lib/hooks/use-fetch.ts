import useSWR from 'swr'
import fetcher from 'lib/utils/fetcher'

export const useFetch = <T>(
  url: string,
  section: string = null,
  limit: number = null
): { data: T; isLoading: boolean; isError: any } => {
  const sectionFetcher = async <JSON = any>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<JSON> => {
    const jsonResponse = await fetch(input, init)
    const res = await jsonResponse.json()
    return res.body[section]
  }

  const customFetcher = section ? sectionFetcher : fetcher

  if (limit) url = `${url}&page[items]=${limit}`

  const { data, error } = useSWR(url, customFetcher)

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}
