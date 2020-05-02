import 'isomorphic-fetch';
import Layout from '../components/Layout'
import EpisodeList from '../components/EpisodeList';
import PodcastGrid from '../components/PodcastGrid';
import Error from './_error'

export default class channel extends React.Component {

  static async getInitialProps({ query, res = {} }){
    let idChannel = query.id

    try {
      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}?version=2`),
        fetch(
          `https://api.audioboom.com/channels/${idChannel}/audio_clips?version=2`
        ),
        fetch(
          `https://api.audioboom.com/channels/${idChannel}/child_channels?version=2`
        ),
      ]);

      res.statusCode = reqChannel.status;
          
      let dataChannel = await reqChannel.json();
      let channel = dataChannel.body.channel
  
      let dataAudios = await reqAudios.json();
      let audioClips = dataAudios.body.audio_clips
  
      let dataSeries = await reqSeries.json();
      let series = dataSeries.body.channels
  
      return { channel, audioClips, series, statusCode: res.statusCode };
    } catch (error) {
      return {channel: null, audioClip: null, series: null, statusCode: res.statusCode}
    }

  }

  render() {
    const { channel, audioClips, series, statusCode } = this.props
    
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }
    
    return (
      <Layout title={`${channel.title} | Podcast`}>

        <div
          className='banner'
          style={{
            backgroundImage: `url(${channel.urls.banner_image.original})`,
          }}
        />

        <h1>{channel.title}</h1>

        {series.length > 0 && 
          <div>
            <h2>Series</h2>
            <PodcastGrid channels={series} />
          </div>
        }

        <h2>Ultimos Podcast</h2>
        <EpisodeList audioClips={audioClips} />

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }

          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }

          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          a.channel {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
          .channel img {
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            width: 100%;
          }
          h1 {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>

      </Layout>
    );
  }
}
