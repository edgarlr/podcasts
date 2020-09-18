import 'isomorphic-fetch';
import Error from '../_error';
import ChannelPage from 'containers/ChannelPage';

export async function getServerSideProps(context) {
  let idChannel = context.query.channel;
  try {
    let [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}?api_version=1`),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/audio_clips?api_version=1`
      ),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/child_channels?api_version=1`
      ),
    ]);

    context.res.statusCode = reqChannel.status;

    let [dataChannel, dataAudios, dataSeries] = await Promise.all([
      await reqChannel.json(),
      await reqAudios.json(),
      await reqSeries.json(),
    ])

    let channel = dataChannel.body.channel;
    let audioClips = dataAudios.body.audio_clips;
    let series = dataSeries.body.channels;

    return {
      props: {
        channel,
        audioClips,
        series,
        statusCode: context.res.statusCode,
      },
    };
  } catch (error) {
    return {
      props: {
        channel: null,
        audioClip: null,
        series: null,
        statusCode: context.res.statusCode,
      },
    };
  }
}

export default function channel({ channel, audioClips, series, statusCode }) {
  if (statusCode !== 200) return <Error statusCode={statusCode} />
  
  return <ChannelPage channel={channel} audioClips={audioClips} series={series} />
}
