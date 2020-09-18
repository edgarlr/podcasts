import 'isomorphic-fetch'
import Error from 'next/error'

import { useFavs } from 'contexts';
import Homepage from 'containers/Homepage';

export async function getServerSideProps(context) {
  try {
    let req = await fetch(
      'https://api.audioboom.com/channels/recommended?api_version=2'
    );
    let { body: channels } = await req.json();

    return { props: { channels, statusCode: context.res.statusCode } };
  } catch (error) {
    return {props: { channels: null, statusCode: context.res.statusCode }}
  }
}

export default function Home ({channels, statusCode}) {
  const { myList } = useFavs()

  if (statusCode !== 200) return <Error statusCode={statusCode} />

  return <Homepage channels={channels} myList={myList} />
} 