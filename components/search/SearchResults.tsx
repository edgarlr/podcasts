import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import EpisodesList from '@components/episodes/EpisodesList'
import SeeAllButton from 'components/search/SeeAllButton'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { getChannelsSearchUrl, getEpisodesSearchUrl } from 'lib/api'
import { useFetch } from 'lib/hooks/use-fetch'

const SearchResults = ({ keyword }: { keyword: string }) => {
  const channelsUrl = getChannelsSearchUrl(keyword)
  const { data: channels, isLoading: channelsLoading } = useFetch<TChannel[]>(
    channelsUrl,
    'channels',
    4
  )

  const episodesUrl = getEpisodesSearchUrl(keyword)
  const { data: episodes, isLoading: episodesLoading } = useFetch<TEpisode[]>(
    episodesUrl,
    'audio_clips',
    4
  )
  const emptyEpisodes = !episodesLoading && (!episodes || episodes.length === 0)
  const emptyChannels = !channelsLoading && (!channels || channels.length === 0)

  if (emptyEpisodes && emptyChannels) {
    return <SearchErrorMessage keyword={keyword} />
  }

  return (
    <>
      <ChannelsCarousel
        title="channels"
        sectionButton={<SeeAllButton section="channels" keyword={keyword} />}
        channels={channels}
        loading={channelsLoading}
        style={{ marginBottom: '1rem' }}
      />
      <EpisodesList
        title="Episodes"
        button={<SeeAllButton section="episodes" keyword={keyword} />}
        episodes={episodes}
        loading={episodesLoading}
        searchCards
      />
    </>
  )
}

export default SearchResults
