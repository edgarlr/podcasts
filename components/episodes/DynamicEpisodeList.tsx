import { getChannelEpisodesUrl } from '@lib/constants'
import { useFetch } from '@lib/hooks'
import EpisodeListContainer from './EpisodeListContainer'

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

  const { data: episodesData, isLoading } = useFetch(
    channelEpisodesUrl,
    'audio_clips'
  )

  return (
    <EpisodeListContainer
      title={`More episodes from ${channel.title}`}
      loading={isLoading}
      episodes={episodesData}
    />
  )
}

export default DynamicEpisodeList
