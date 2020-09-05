import 'isomorphic-fetch'
import Error from 'next/error'

import Layout from '../../components/Layout';
import MainTitle from '../../components/MainTitle';
import Grid from '../../components/Grid';
import PodcastCover from '../../components/PodcastCover';

export async function getServerSideProps(context) {
  try {
    let req = await fetch(
      `https://api.audioboom.com/categories/${context.params.categoryId}/channels/featured?api_version=2`
    );
    let { body } = await req.json();

    return { props: {data: body, statusCode: context.res.statusCode} };
  } catch (error) {
    return {props: { data: null, statusCode: context.res.statusCode }}
  }
}

export default function Home ({data, statusCode}) {
  const {channels, title} = data;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (  
    <Layout title={title}>
      <MainTitle title={title} />

      <div className='content'>
        <Grid title={'Shows'} >
          {channels.map((channel, index) => (
            <PodcastCover channel={channel} index={index} key={index}/>
          ))}
        </Grid>
      </div>

      <style jsx>{`
        .content {
          padding: 0 1.5em;
        }
      `}</style>
    </Layout>
  );
}