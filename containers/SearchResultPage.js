import { useFetchPlaylist } from 'hooks/useFetchPlaylist'
import { colors, fontWeight } from 'styles/theme'
import EpisodeList from 'components/episodes/EpisodeList'
import PodcastCover from 'components/PodcastCover'
import { SectionTitle } from 'components/SectionTitle'
import { useFetchChannels } from 'hooks/useFetchChannels'
import GridCarousel from 'components/GridCarousel'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'

export const SearchResultPage = () => {
  const { clientPlaylist, isLoading } = useFetchPlaylist('4579242')
  const { clientChannels, isLoading: loadingChannels } = useFetchChannels()


  return (
    <Layout
    navigation={true}
    headerText='Quemes despues d in search'
    pageTitle='Podcasts'
  >
     <MainTitle title='"Quemese despues d" in search' />

      <SectionTitle title='Channels' button={<span>See all channels</span>}/>
      {!loadingChannels && (
        <GridCarousel >
          {clientChannels.slice(0, 4).map((channel, index) => (
            <PodcastCover channel={channel} index={index} key={index}/>
          ))}
        </GridCarousel>
      )}

      <SectionTitle title='Episodes'  button={<span>See all episodes</span>}/>
      <EpisodeList audioClips={clientPlaylist} loading={isLoading}/>

      <style jsx>{`
        span {
          font-size: .9rem;
          font-weight: ${fontWeight.bold};
          color: ${colors.darkGray};
        }
      `}</style>
  </Layout>
  )
}