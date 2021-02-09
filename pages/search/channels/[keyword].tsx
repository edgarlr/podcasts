import { useRouter } from 'next/router'
import { useFetch } from 'lib/hooks/use-fetch'
import Layout from 'components/common/Layout'
import PageTitle from '@components/ui/PageTitle'
import ClearSearchButton from 'components/search/ClearSearchButton'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { getChannelsSearchUrl } from 'lib/api'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'

export default function SeachChannel() {
  const {
    query: { keyword },
  } = useRouter()

  const channelsUrl = getChannelsSearchUrl(keyword as string)
  const { data, isLoading } = useFetch<TChannel[]>(channelsUrl, 'channels')

  return (
    <Layout
      headerText={`"${keyword}" in search`}
      pageTitle="Search"
      button={<ClearSearchButton />}
      navigation={false}
    >
      {!isLoading && data.length === 0 ? (
        <SearchErrorMessage keyword={keyword as string} />
      ) : (
        <>
          <PageTitle title={`"${keyword}" in search`} />
          <ChannelsGrid
            title="All channels"
            channels={data}
            loading={isLoading}
            style={{ marginTop: '1rem' }}
          />
        </>
      )}
    </Layout>
  )
}
