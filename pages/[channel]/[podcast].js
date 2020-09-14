import 'isomorphic-fetch';
import Error from 'next/error';
import Head from 'next/head';
import PodcastPage from 'containers/PodcastPage';

export async function getServerSideProps(context) {
  let podcastId = context.query.podcast;

  try {
    let req = await fetch(
      `https://api.audioboom.com/audio_clips/${podcastId}?api_version=2`
      );
      
    let { body: { audio_clip } } = await req.json()

    return {props: { audio_clip, statusCode: context.res.statusCode}}

  } catch (error) {
    return {props: {audio_clip: null, statusCode: context.res.statusCode}}
  }
}

export default function podcast({ audio_clip, statusCode }) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  
  return (
    <>
      <Head>
        <title>{audio_clip.title} | Podcasts</title>
      </Head>
      <PodcastPage audio_clip={audio_clip} />
    </>
  );
}
