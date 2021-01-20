import PodcastPage from 'components/screens/PodcastPage'
import { useRouter } from 'next/router'
import SkeletonEpisodePage from 'components/screens/skeleton/SkeletonEpisodePage'
import { getEpisode } from '@lib/api'
import ErrorPage from 'next/error'
import { InferGetStaticPropsType } from 'next'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const episode: TEpisode = await getEpisode(params.episodeId)

  // No props will trigger 404
  if (!episode) return { props: {} }
  return { props: { episode } }
}

export default function podcast({
  episode,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()
  if (!isFallback && !episode) return <ErrorPage statusCode={404} />
  if (isFallback) return <SkeletonEpisodePage />
  return <PodcastPage episode={episode} />
}
