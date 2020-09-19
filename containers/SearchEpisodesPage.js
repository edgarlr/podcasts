import { SectionTitle } from 'components/SectionTitle'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import { useFetchPlaylist } from 'hooks/useFetchPlaylist'
import EpisodeList from 'components/episodes/EpisodeList'

export const SearchEpisodesPage = () => {
  const { clientPlaylist, isLoading } = useFetchPlaylist('4579242')

  return (
    <Layout
      navigation={true}
      headerText='Quemes despues d in search'
      pageTitle='Podcasts'
    >
      <section>
        <MainTitle title='"Quemese despues d" in search' />
        <SectionTitle title='All episodes'/>
        <EpisodeList audioClips={clientPlaylist} loading={isLoading}/>
      </section>

      <style jsx>{`
        section {
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}