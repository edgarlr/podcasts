import ChannelPage from 'components/screens/ChannelPage';
import SkeletonChannelPage from 'components/screens/skeleton/SkeletonChannelPage';
import { useRouter } from 'next/router';

export default function channel({ channel, episodes, series }) {
  const router = useRouter();

  if (router.isFallback) return <SkeletonChannelPage />;

  return <ChannelPage channel={channel} episodes={episodes} series={series} />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [reqChannel, reqAudios, reqSeries] = await Promise.all([
    fetch(
      `https://api.audioboom.com/channels/${params.channelId}?api_version=1`
    ),
    fetch(
      `https://api.audioboom.com/channels/${params.channelId}/audio_clips?api_version=1`
    ),
    fetch(
      `https://api.audioboom.com/channels/${params.channelId}/child_channels?api_version=1`
    ),
  ]);

  const [dataChannel, dataAudios, dataSeries] = await Promise.all([
    await reqChannel.json(),
    await reqAudios.json(),
    await reqSeries.json(),
  ]);

  const channel = dataChannel.body.channel;
  const episodes = dataAudios.body.audio_clips;
  const series = dataSeries.body.channels;

  return {
    props: {
      channel,
      episodes,
      series,
    },
    revalidate: 20,
  };
}
