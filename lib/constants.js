const BASE_API_URL = `https://api.audioboom.com`

export const CHANNELS_URL = `${BASE_API_URL}/channels/recommended?api_version=2`

export const getChannelUrl = (channelId) =>
  `${BASE_API_URL}/channels/${channelId}?api_version=1`

export const getChannelEpisodesUrl = (channelId) =>
  `${BASE_API_URL}/channels/${channelId}/audio_clips?api_version=1`

export const getChannelSeriesUrl = (channelId) =>
  `${BASE_API_URL}/channels/${channelId}/child_channels?api_version=1`

export const getEpisodeUrl = (episodeId) =>
  `${BASE_API_URL}/audio_clips/${episodeId}?api_version=2`

export const getEpisodesSearchUrl = (keyword) =>
  `${BASE_API_URL}/audio_clips?api_version=1&find[query]=${encodeURIComponent(
    keyword
  )}`

export const getChannelsSearchUrl = (keyword) =>
  `${BASE_API_URL}/channels?api_version=1&find[title]=${encodeURIComponent(
    keyword
  )}`
