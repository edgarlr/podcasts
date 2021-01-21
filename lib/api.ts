const API_URL = `https://api.audioboom.com`

export async function fetchAPI(path: string) {
  try {
    const response = await fetch(`${API_URL}${path}`)
    const data = await response.json()
    return data
  } catch (error) {
    return { body: {} }
  }
}

export async function getRecommendedChannels() {
  const { body: data } = await fetchAPI('/channels/recommended?api_version=2')
  return data
}

export async function getEpisodeById(id: string) {
  const {
    body: { audio_clip: data },
  } = await fetchAPI(`/audio_clips/${id}?api_version=2`)
  return data
}

export async function getChannelById(id: string) {
  const {
    body: { channel: data },
  } = await fetchAPI(`/channels/${id}?api_version=1`)
  return data
}

export async function getChannelsEpisodes(channelId: string) {
  const {
    body: { audio_clips: data },
  } = await fetchAPI(`/channels/${channelId}/audio_clips?api_version=1`)
  return data
}

export async function getChannelsSeries(channelId: string) {
  const {
    body: { channels: data },
  } = await fetchAPI(`/channels/${channelId}/child_channels?api_version=1`)
  return data
}
