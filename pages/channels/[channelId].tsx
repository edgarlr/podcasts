import { useRouter } from 'next/router'
import { getChannelById, getChannelsEpisodes, getChannelsSeries } from 'lib/api'
import { InferGetStaticPropsType } from 'next'
import MainTitle from 'components/MainTitle'
import Layout from 'components/common/Layout'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import FollowButton from '@components/FollowButton'
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton'
import TranslucentImage from '@components/ui/TranslucentImage'
import DescriptionContainer from 'components/DescriptionContainer'
import Custom404 from 'pages/404'

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
      <MainTitle
        title={channel.title}
        subtitle={channel.parent_channel_id && 'Serie'}
      />

      <TranslucentImage
        url={channel.urls.logo_image.original}
        alt={`${channel.title} cover`}
        width={150}
        height={150}
        shape="circle"
        style={{
          margin: '1rem auto',
        }}
      />

      <FollowButton channel={channel} />

      {series.length === 0 && channel.description.length > 100 && (
        <DescriptionContainer content={channel.description} />
      )}

      <ChannelsCarousel title={`${channel.title}'S SERIES`} channels={series} />

      <EpisodesListWithSortButton
        episodes={episodes}
        title={`${episodes.length} available episodes`}
      />
    </Layout>
  )
}
