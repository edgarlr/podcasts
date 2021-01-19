import PodcastPage from 'components/screens/PodcastPage'
import { useRouter } from 'next/router'
import { getEpisodeUrl } from 'lib/constants'
import SkeletonEpisodePage from 'components/screens/skeleton/SkeletonEpisodePage'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const episodeUrl = getEpisodeUrl(params.episodeId)
  const req = await fetch(episodeUrl)

  const {
    body: { audio_clip: episode },
  } = await req.json()

  return { props: { episode } }
}

export default function podcast({ episode }) {
  const router = useRouter()
  if (router.isFallback) return <SkeletonEpisodePage />
  return <PodcastPage episode={episode} />
}
