import PodcastPage from 'components/screens/PodcastPage';
import { useRouter } from 'next/router';

export default function podcast({ episode }) {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return <PodcastPage episode={episode} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://api.audioboom.com/audio_clips/${params.episodeId}api_version=2`
  );

  const {
    body: { audio_clip: episode },
  } = await req.json();

  return { props: { episode } };
}
