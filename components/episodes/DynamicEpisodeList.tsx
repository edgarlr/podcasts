import { getChannelEpisodesUrl } from '@lib/api'
import { useFetch } from '@lib/hooks/use-fetch'
import EpisodesList from './EpisodesList'

type Props = {
  channel: {
    id: number
    title: string
    urls: {
      detail: string
      logo_image: TImage
    }
  }
}

const DynamicEpisodeList = ({ channel }: Props) => {
  const channelEpisodesUrl = getChannelEpisodesUrl(channel.id)

  const { data: episodesData, isLoading } = useFetch<TEpisode[]>(
    channelEpisodesUrl,
    'audio_clips'
  )

  return (
    <EpisodesList
      title={`More episodes from ${channel.title}`}
      loading={isLoading}
      episodes={episodesData}
    />
  )
}

export default DynamicEpisodeList
