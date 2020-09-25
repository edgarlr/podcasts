import Error from 'next/error';
import PodcastPage from 'containers/PodcastPage';

export async function getServerSideProps(context) {
  const podcastId = context.query.podcast;

  try {
    const req = await fetch(
      `https://api.audioboom.com/audio_clips/${podcastId}?api_version=2`
    );

    const {
      body: { audio_clip: audioClip },
    } = await req.json();

    return { props: { audioClip, statusCode: context.res.statusCode } };
  } catch (error) {
    return { props: { audioClip: null, statusCode: context.res.statusCode } };
  }
}

export default function podcast({ audioClip, statusCode }) {
  if (statusCode !== 200) return <Error statusCode={statusCode} />;

  return <PodcastPage episodes={audioClip} />;
}
