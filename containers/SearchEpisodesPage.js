import { SectionTitle } from 'components/SectionTitle'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import EpisodeList from 'components/episodes/EpisodeList'
import { useRouter } from 'next/router'
import { useSearch } from 'hooks/useSearch'

export const SearchEpisodesPage = () => {
  const router = useRouter()
  const { keyword } = router.query
  
  const { data, isLoading } = useSearch('audio_clips', keyword)

  return (
    <Layout
      navigation={true}
      headerText={`\"${keyword}\" in search`}
      pageTitle='Podcasts'
    >
      <MainTitle title={`\"${keyword}\" in search`} />
      
      <section>
        <SectionTitle title='All episodes'/>
        <EpisodeList audioClips={data} loading={isLoading}/>
      </section>

      <style jsx>{`
        section {
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}