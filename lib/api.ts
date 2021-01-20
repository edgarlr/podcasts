const API_URL = `https://api.audioboom.com`

export async function fetchAPI(path: string) {
  const response = await fetch(`${API_URL}${path}`)
  const data = await response.json()
  return data
}

export async function getEpisode(id: string) {
  const {
    body: { audio_clip: data },
  } = await fetchAPI(`/audio_clips/${id}?api_version=2`)
  return data
}
