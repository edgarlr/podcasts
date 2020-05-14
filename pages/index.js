import 'isomorphic-fetch'
import Layout from '../components/Layout';
import PodcastGrid from '../components/PodcastGrid';
import Error from 'next/error'
import PodcastGridCarousel from '../components/PodcastGridCarousel';
import Header from '../components/Header';

export async function getServerSideProps(context) {
  try {
    let req = await fetch(
      'https://api.audioboom.com/channels/recommended?api_version=2'
    );
    let { body: channels } = await req.json();

    return { props: {channels, statusCode: context.res.statusCode} };
  } catch (error) {
    return {props: { channels: null, statusCode: context.res.statusCode }}
  }
}

export default function Home ({channels, statusCode}) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout title='Podcast'>
      <Header headerText='Podcast' />

      <PodcastGridCarousel channels={channels} title={'tus seguidos'} />

      <div className='content'>
        <PodcastGrid channels={channels} title={'programas'} />
      </div>

      <style jsx>{`
        .content {
          padding: 0 1.5em;
        }
      `}</style>
    </Layout>
  );
}