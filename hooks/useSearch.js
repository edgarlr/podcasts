import useSWR from 'swr'


export const useSearch = (section, keyword, limit = null) => {
  let URI = `https://api.audioboom.com/${section}?api_version=1&find[title]=${keyword}`
  if (section === 'audio_clips') {
    URI = `https://api.audioboom.com/${section}?api_version=1&find[query]=${keyword}`
  }
  if(limit) {
    URI = `https://api.audioboom.com/${section}?api_version=1&find[query]=${keyword}&page[items]=${limit}`
  }
  
  const fetcher = (...args) => fetch(...args).then(res => res.json()).then(r => r.body[section])
  
  const { data, error } = useSWR(URI, fetcher)

  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
}