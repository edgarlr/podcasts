import { useRouter } from 'next/router'
import {
  getChannelById,
  getChannelsEpisodes,
  getChannelsSeries,
  getRecommendedChannels,
} from 'lib/api'
import { InferGetStaticPropsType } from 'next'
import Layout from 'components/common/Layout'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton'
import Custom404 from 'pages/404'
import ChannelHeader from '@components/channel/ChannelHeader'

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const [channel, episodes, series, recommended]: [
    TChannel,
    TEpisode[],
    TChannel[],
    TChannel[]
  ] = await Promise.all([
    getChannelById(params.channelId),
    getChannelsEpisodes(params.channelId),
    getChannelsSeries(params.channelId),
    getRecommendedChannels(5),
  ])
  // No props will trigger 404
  if (!channel) return { props: {} }
  return { props: { channel, episodes, series, recommended } }
}

export default function channel({
  channel,
  episodes,
  series,
  recommended,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !channel) return <Custom404 />

  return (
    <Layout
      headerText={channel.title}
      metaDescription={channel.description}
      pageTitle={`${channel.title} | Podcasts`}
    >
      <ChannelHeader channel={channel} />

      <ChannelsCarousel
        title={`${channel.title}'S SERIES`}
        channels={series}
        style={{ margin: '1.5rem 0' }}
      />

      <EpisodesListWithSortButton
        episodes={episodes}
        title={`${episodes.length} available episodes`}
      />

      <ChannelsCarousel
        title="Recommended Show"
        channels={recommended}
        style={{ marginTop: '5rem' }}
      />
    </Layout>
  )
}
