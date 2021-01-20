import Homepage from 'components/screens/Homepage'
import { getRecommendedChannels } from 'lib/api'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const channels: TChannel[] = await getRecommendedChannels()
  return { props: { channels } }
}

export default function Home({
  channels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Homepage channels={channels} />
}
