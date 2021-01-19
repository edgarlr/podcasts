import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import { useRouter } from 'next/router'
import { useFetch } from 'lib/hooks'
import ClearSearchButton from 'components/search/ClearSearchButton'
import EpisodeListContainer from 'components/episodes/EpisodeListContainer'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { getEpisodesSearchUrl } from 'lib/constants'

export const SearchEpisodesPage = () => {
  const router = useRouter()
  const { keyword } = router.query

  const episodesUrl = getEpisodesSearchUrl(keyword)

  const { data, isLoading } = useFetch(episodesUrl, 'audio_clips')

  const Content = () => (
    <>
      <MainTitle title={`"${keyword}" in search`} />
      <EpisodeListContainer
        title="All Episodes"
        episodes={data}
        loading={isLoading}
      />
    </>
  )

  return (
    <Layout
      navigation
      headerText={`"${keyword}" in search`}
      pageTitle="Search | Podcasts App"
      button={<ClearSearchButton />}
    >
      {!isLoading && data.length === 0 ? (
        <SearchErrorMessage keyword={keyword as string} />
      ) : (
        <Content />
      )}
    </Layout>
  )
}
