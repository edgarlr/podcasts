import { useRouter } from 'next/router'
import { getEpisodeById, getRecommendedChannels } from '@lib/api'
import { InferGetStaticPropsType } from 'next'
import Layout from 'components/common/Layout'
import DynamicEpisodeList from '@components/episodes/DynamicEpisodeList'
import Custom404 from 'pages/404'
import { ChannelsCarousel } from '@components/channel/ChannelsCarousel'
import EpisodeHeader from '@components/episodes/EpisodeHeader'
import SectionTitle from '@components/SectionTitle'

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const [episode, recommended]: [TEpisode, TChannel[]] = await Promise.all([
    getEpisodeById(params.episodeId),
    getRecommendedChannels(5),
  ])
  // No props will trigger 404
  if (!episode) return { props: {} }
  return {
    props: { episode, recommended },
    // revalidate: 60 * 60 * 24, // Once a day
  }
}

export default function podcast({
  episode,
  recommended,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !episode) return <Custom404 />

  const { channel } = episode

  return (
    <Layout
      headerText={episode.title}
      pageTitle={episode.title}
      metaDescription={episode.description}
    >
      <EpisodeHeader episode={episode} />

      <SectionTitle title={`More from: ${episode.channel.title}`} border />

      <DynamicEpisodeList channel={channel} />

      <ChannelsCarousel
        title="Recommended Show"
        channels={recommended}
        style={{ marginTop: '5rem' }}
      />
    </Layout>
  )
}
