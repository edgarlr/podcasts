import { useRouter } from 'next/router'
import { useFetch } from 'lib/hooks'
import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import ClearSearchButton from 'components/search/ClearSearchButton'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { getChannelsSearchUrl } from 'lib/constants'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'

export default function SeachChannel() {
  const {
    query: { keyword },
  } = useRouter()

  const channelsUrl = getChannelsSearchUrl(keyword as string)
  const { data, isLoading } = useFetch(channelsUrl, 'channels')

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
        <>
          <MainTitle title={`"${keyword}" in search`} />
          <ChannelsGrid
            title="All channels"
            channels={data}
            loading={isLoading}
          />
        </>
      )}
    </Layout>
  )
}
