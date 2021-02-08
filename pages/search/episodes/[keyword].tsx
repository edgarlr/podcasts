import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import { useRouter } from 'next/router'
import { useFetch } from 'lib/hooks/use-fetch'
import ClearSearchButton from 'components/search/ClearSearchButton'
import EpisodeListContainer from 'components/episodes/EpisodeListContainer'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { getEpisodesSearchUrl } from 'lib/api'

export default function SeachChannel() {
  const {
    query: { keyword },
  } = useRouter()

  const episodesUrl = getEpisodesSearchUrl(keyword as string)
  const { data, isLoading } = useFetch<TEpisode[]>(episodesUrl, 'audio_clips')

  return (
    <Layout
      headerText={`"${keyword}" in search`}
      pageTitle="Search | Podcasts App"
      button={<ClearSearchButton />}
    >
      {!isLoading && data.length === 0 ? (
        <SearchErrorMessage keyword={keyword as string} />
      ) : (
        <>
          <MainTitle title={`"${keyword}" in search`} />
          <EpisodeListContainer
            title="All Episodes"
            episodes={data}
            loading={isLoading}
          />
        </>
      )}
    </Layout>
  )
}
