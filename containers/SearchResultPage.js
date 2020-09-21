import { colors, fontWeight } from 'styles/theme'
import EpisodeList from 'components/episodes/EpisodeList'
import { SectionTitle } from 'components/SectionTitle'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import { useSearch } from 'hooks/useSearch'

export const SearchResultPage = () => {
  const { data: dataChannels, isLoading: loadingChannels } = useSearch('channels', 'Quemese')
  const { data: dataEpisodes, isLoading: loadingEpisodes } = useSearch('audio_clips', 'Quemese')

  return (
    <Layout
    navigation={true}
    headerText='Quemes despues d in search'
    pageTitle='Podcasts'
  >
    <MainTitle title='"Quemese despues d" in search' />

    <section>
      <SectionTitle title='Channels' button={<span>See all channels</span>}/>
      <ChannelsCarousel channels={dataChannels} loading={loadingChannels} />
    </section>

    <section> 
      <SectionTitle title='Episodes'  button={<span>See all episodes</span>}/>
      <EpisodeList audioClips={dataEpisodes} loading={loadingEpisodes}/>
    </section> 

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