import MainTitle from 'components/MainTitle'
import { SectionTitle }from 'components/SectionTitle'
import Grid from 'components/Grid'
import GridCarousel from 'components/GridCarousel'
import PodcastCover from 'components/PodcastCover'
import Layout from 'components/Layout'

const Hompage = ({channels, myList = []}) => {
  return (
    <Layout
      headerText='Podcasts' 
    >

      <MainTitle title='Podcasts' />

      {myList.length !== 0 && (
        <section>
          <SectionTitle title='Followed' />

          <GridCarousel>
            {myList.map((channel, index) => (
              <PodcastCover channel={channel} key={index} />
            ))}
          </GridCarousel>
        </section>
      )}

      <section>
        <SectionTitle title='All Shows' />
        
        <Grid>
          {channels.map((channel, index) => (
            <PodcastCover channel={channel} key={index}/>
          ))}
        </Grid>
      </section>

    </Layout>
  )
}

export default Hompage