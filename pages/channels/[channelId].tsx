import { useRouter } from 'next/router'
import { getChannelById, getChannelsEpisodes, getChannelsSeries } from 'lib/api'
import { InferGetStaticPropsType } from 'next'
import Layout from 'components/common/Layout'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton'
import DescriptionContainer from 'components/DescriptionContainer'
import Custom404 from 'pages/404'
import ChannelHeader from '@components/channel/ChannelHeader'

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const [channel, episodes, series]: [
    TChannel,
    TEpisode[],
    TChannel[]
  ] = await Promise.all([
    getChannelById(params.channelId),
    getChannelsEpisodes(params.channelId),
    getChannelsSeries(params.channelId),
  ])
  // No props will trigger 404
  if (!channel) return { props: {} }
  return { props: { channel, episodes, series } }
}

export default function channel({
  channel,
  episodes,
  series,
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

      <ChannelsCarousel title={`${channel.title}'S SERIES`} channels={series} />

      <EpisodesListWithSortButton
        episodes={episodes}
        title={`${episodes.length} available episodes`}
      />
    </Layout>
  )
}
