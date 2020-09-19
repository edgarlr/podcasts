import PodcastCover from 'components/PodcastCover'
import { SectionTitle } from 'components/SectionTitle'
import { useFetchChannels } from 'hooks/useFetchChannels'
import Grid from 'components/Grid'
import Layout from 'components/Layout'
import MainTitle from 'components/MainTitle'

export const SearchChannelPage = () => {
  const { clientChannels, isLoading } = useFetchChannels()

  return (
    <Layout
      navigation={true}
      headerText='Quemes despues d in search'
      pageTitle='Podcasts'
    >
      <section>
        <MainTitle title='"Quemese despues d" in search' />
        <SectionTitle title='All channels' />
        {!isLoading && (
          <Grid >
            {clientChannels.map((channel, index) => (
              <PodcastCover channel={channel} index={index} key={index}/>
            ))}
          </Grid>
        )}
      </section>

      <style jsx>{`
        section {
          padding: 0;
        }
      `}</style>
    </Layout>
  )
}