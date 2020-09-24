import { useRouter } from 'next/router'
import { useSearch } from 'hooks/useSearch'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import ClearSearchButton from 'components/search/ClearSearchButton'
import SearchErrorMessage from 'components/search/SearchErrorMessage'
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel'

export const SearchChannelPage = () => {
  const router = useRouter()
  const { keyword } = router.query

  const channelsUrl = `https://api.audioboom.com/channels?find[title]=${keyword}&api_version=1`
  const { data, isLoading } = useSearch(channelsUrl, 'channels')

  const Content = () => (
    <>
      <MainTitle title={`\"${keyword}\" in search`} />
      <ChannelsCarousel 
        title='All channels' 
        channels={data} 
        loading={isLoading} 
      />
    </>
  )

  return (
    <Layout
      navigation={true}
      headerText={`\"${keyword}\" in search`}
      pageTitle='Podcasts'
      button={<ClearSearchButton />}
    >
      
      {!isLoading && data.length === 0
        ? <SearchErrorMessage keyword={keyword} />
        : <Content />
      }

    </Layout>
  )
}