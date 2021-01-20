import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import { useFavs } from 'lib/contexts'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import dynamic from 'next/dynamic'
import { useIsMobile } from 'lib/hooks'
import ChannelsList from 'components/channel/ChannelList'

const DynamicSearch = dynamic(() => import('components/screens/SearchModal'), {
  ssr: false,
})

const Homepage = ({ channels }: { channels: TChannel[] }) => {
  const { myList } = useFavs()
  const isMobile = useIsMobile()

  return (
    <Layout
      headerText="Podcasts App"
      pageTitle="Podcasts App"
      button={<DynamicSearch />}
    >
      <MainTitle title="Podcasts App" />

      <ChannelsCarousel title="Followed" channels={myList} />

      {isMobile ? (
        <>
          <ChannelsCarousel title="featured" channels={channels.slice(0, 6)} />
          <ChannelsGrid title="trending" channels={channels.slice(7, 13)} />
          <ChannelsGrid title="Last added" channels={channels.slice(14)} />
        </>
      ) : (
        <>
          <ChannelsCarousel title="Featured" channels={channels.slice(0, 6)} />
          <h2>Explore</h2>
          <div className="list-container">
            <ChannelsList title="Trending" channels={channels.slice(7, 13)} />
            <ChannelsList title="Last Added" channels={channels.slice(14)} />
          </div>
        </>
      )}

      <style jsx>{`
        .list-container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5rem;
        }
        h2 {
          margin: 0;
          padding: 1rem 0 0;
          font-size: 1.8rem;
        }
      `}</style>
    </Layout>
  )
}

export default Homepage