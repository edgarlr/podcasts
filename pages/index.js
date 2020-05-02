import 'isomorphic-fetch'
import Layout from '../components/Layout';
import PodcastGrid from '../components/PodcastGrid';
import Error from 'next/error'

export default class extends React.Component {

  static async getInitialProps() {
    try {
      let req = await fetch('https://api.audioboom.com/channels/recommended?api_version=2')
      let { body: channels } = await req.json();
  
      return {channels, statusCode: 200}
    } catch (error) {
      res.statusCode = 503;
      return { channels: null, statusCode: 503}
    }
  }

  render() {
    const { channels, statusCode } = this.props;

    if(statusCode !== 200) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title='Podcast'>
        <PodcastGrid channels={channels} />
      </Layout>
    )
  }
}