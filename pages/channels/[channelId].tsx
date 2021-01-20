import { useRouter } from 'next/router'
import ChannelPage from 'components/screens/ChannelPage'
import SkeletonChannelPage from 'components/screens/skeleton/SkeletonChannelPage'
import { getChannelById, getChannelsEpisodes, getChannelsSeries } from 'lib/api'
import { InferGetStaticPropsType } from 'next'
import ErrorPage from 'next/error'

export async function getStaticPaths() {
  return { paths: [], fallback: true }
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

  if (!isFallback && !channel) return <ErrorPage statusCode={404} />

  if (isFallback) return <SkeletonChannelPage />

  return <ChannelPage channel={channel} episodes={episodes} series={series} />
}
