import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import { SectionTitle }from 'components/SectionTitle'
import SearchContainer from 'components/SearchContainer'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import { useFavs } from 'contexts'

const Homepage = ({channels}) => {
  const { myList } = useFavs()
  return (
    <Layout 
      headerText='Podcasts' 
      pageTitle='Podcast App'
      button={<SearchContainer />}
    >
      
      <MainTitle title='Podcasts' />

      {myList.length !== 0 && (
        <section>
          <SectionTitle title='Followed' />
          <ChannelsCarousel channels={myList} loading={myList.length < 0} />
        </section>
      )}

      <section>
        <SectionTitle title='featured shows' />
        <ChannelsGrid channels={channels} loading={channels.length < 0} />
      </section>

    </Layout>
  )
}

export default Homepage
