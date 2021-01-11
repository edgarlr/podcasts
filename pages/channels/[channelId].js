import { useRouter } from 'next/router';
import ChannelPage from 'components/screens/ChannelPage';
import SkeletonChannelPage from 'components/screens/skeleton/SkeletonChannelPage';
import {
  getChannelEpisodesUrl,
  getChannelSeriesUrl,
  getChannelUrl,
} from 'lib/constants';

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
  const channelUrl = getChannelUrl(params.channelId);
  const episodesUrl = getChannelEpisodesUrl(params.channelId);
  const seriesUrl = getChannelSeriesUrl(params.channelId);

  const [reqChannel, reqAudios, reqSeries] = await Promise.all([
    fetch(channelUrl),
    fetch(episodesUrl),
    fetch(seriesUrl),
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
  };
}
