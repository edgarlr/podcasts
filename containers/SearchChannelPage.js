import { SectionTitle } from 'components/SectionTitle'
import { ChannelsGrid } from 'components/channel/ChannelsGrid'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'
import { useRouter } from 'next/router'
import { useSearch } from 'hooks/useSearch'
import ClearSearchButton from 'components/ClearSearchButton'

export const SearchChannelPage = () => {
  const router = useRouter()
  const { keyword } = router.query

  const { data, isLoading } = useSearch('channels', keyword)

  return (
    <Layout
      navigation={true}
      headerText={`\"${keyword}\" in search`}
      pageTitle='Podcasts'
      button={<ClearSearchButton />}
    >
      <MainTitle title={`\"${keyword}\" in search`} />

      <section>
        <SectionTitle title='All channels' />
        <ChannelsGrid channels={data} loading={isLoading} />
      </section>

      <style jsx>{`
        section {
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}