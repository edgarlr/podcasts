import { InferGetStaticPropsType } from 'next'
import { getRecommendedChannels } from 'lib/api'
import { useFavs } from 'lib/hooks/use-favs'
import Layout from 'components/common/Layout'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import ChannelsList from 'components/channel/ChannelList'

export async function getStaticProps() {
  const channels: TChannel[] = await getRecommendedChannels()
  return { props: { channels } }
}

export default function Home({
  channels,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { favs } = useFavs()

  return (
    <Layout navigation={false}>
      <ChannelsCarousel title="Followed" channels={favs} />
      <hr />
      <h2>Explore</h2>
      <div className="list-container">
        <ChannelsList title="Trending" channels={channels.slice(0, 5)} />
        <ChannelsList title="Last Added" channels={channels.slice(5, 10)} />
      </div>
      <hr />
      <ChannelsCarousel title="Shows" channels={channels.slice(10, 15)} />
      <ChannelsCarousel title="Episodes" channels={channels.slice(15)} />

      <style jsx>{`
        hr {
          margin: 5rem 0;
          height: 1px;
          border: none;
          background: var(--primary-20);
        }
        .list-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        h2 {
          margin: 0;
          margin-left: 0;
          padding: 1rem 0 0;
          font-size: var(--font-2xl);
        }

        @media screen and (min-width: 768px) {
          h2 {
            margin-left: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}
