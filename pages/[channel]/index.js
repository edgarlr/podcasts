import Error from '../_error';
import ChannelPage from 'containers/ChannelPage';

export async function getServerSideProps(context) {
  const idChannel = context.query.channel;
  try {
    const [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}?api_version=1`),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/audio_clips?api_version=1`
      ),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/child_channels?api_version=1`
      ),
    ]);

    context.res.statusCode = reqChannel.status;

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
        statusCode: context.res.statusCode,
      },
    };
  } catch (error) {
    return {
      props: {
        channel: null,
        episodes: null,
        series: null,
        statusCode: context.res.statusCode,
      },
    };
  }
}

export default function channel({ channel, episodes, series, statusCode }) {
  if (statusCode !== 200) return <Error statusCode={statusCode} />;

  return <ChannelPage channel={channel} episodes={episodes} series={series} />;
}
