export const GITHUB_URL = 'https://github.com/edgarlr'
export const TWITTER_URL = 'https://twitter.com/@edgarlr_'

const BASE_API_URL = `https://api.audioboom.com`

export const getChannelEpisodesUrl = (channelId) =>
  `${BASE_API_URL}/channels/${channelId}/audio_clips?api_version=1`

export const getEpisodesSearchUrl = (keyword: string) =>
  `${BASE_API_URL}/audio_clips?api_version=1&find[query]=${encodeURIComponent(
    keyword
  )}`

export const getChannelsSearchUrl = (keyword: string) =>
  `${BASE_API_URL}/channels?api_version=1&find[title]=${encodeURIComponent(
    keyword
  )}`
