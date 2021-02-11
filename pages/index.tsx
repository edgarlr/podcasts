import { InferGetStaticPropsType } from 'next'
import { getRecommendedChannels, getRecommendedEpisodes } from 'lib/api'
import { useFavs } from 'lib/hooks/use-favs'
import Layout from 'components/common/Layout'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import ChannelsList from 'components/channel/ChannelList'
import { Hero } from '@components/common/Hero'

export async function getStaticProps() {
  const [channels, episodes]: [TChannel[], TEpisode[]] = await Promise.all([
    getRecommendedChannels(),
    getRecommendedEpisodes(5),
  ])
  return {
    props: { channels, episodes },
    revalidate: 60 * 60 * 24, // Once a day
  }
}

export default function Home({
  channels,
  episodes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { favs } = useFavs()

  return (
    <Layout navigation={false}>
      <Hero episodes={episodes} />
      <ChannelsCarousel
        title="Followed"
        channels={favs}
        className="home-carousel followed"
      />
      <hr />
      <h2>Explore</h2>
      <div className="list-container">
        <ChannelsList title="Trending" channels={channels.slice(0, 5)} />
        <ChannelsList title="Last Added" channels={channels.slice(5, 10)} />
      </div>
      <hr />
      <ChannelsCarousel
        title="Shows"
        channels={channels.slice(10, 15)}
        className="home-carousel"
      />
      <ChannelsCarousel
        title="Episodes"
        channels={channels.slice(15)}
        className="home-carousel"
      />

      <style jsx>{`
        hr {
          margin: 2rem 0;
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
          margin-top: 1rem;
          padding: 1rem 0 0;
          font-size: var(--font-2xl);
        }
        :global(.home-carousel) {
          margin: 0.5rem 0;
        }
        @media screen and (min-width: 768px) {
          hr {
            margin: 5rem 0;
          }
          h2 {
            margin-left: 1.5rem;
          }
          :global(.home-carousel) {
            margin: 1rem 0;
          }
          :global(.followed) {
            margin-top: 2rem;
          }
        }
      `}</style>
    </Layout>
  )
}
