import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import ImgTranslucent from 'components/ImgTranslucent'
import SectionTitle from 'components/SectionTitle'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import DescriptionContainer from 'components/DescriptionContainer'
import PlayButton from 'components/player/PlayButton'
import EpisodeListContainer from 'components/episodes/EpisodeListContainer'
import { useFetch } from 'lib/hooks'
import { getChannelEpisodesUrl } from 'lib/constants'

const PodcastPage = ({ episode }: { episode: TEpisode }) => {
  const { channel } = episode

  const channelEpisodesUrl = getChannelEpisodesUrl(channel.id)

  const { data: episodesData, isLoading } = useFetch(
    channelEpisodesUrl,
    'audio_clips'
  )

  return (
    <Layout
      navigation
      headerText={episode.title}
      pageTitle={`${episode.title} | Podcasts`}
      metaDescription={episode.description}
    >
      <div className="title-container">
        <ImgTranslucent
          url={episode.urls.image || channel.urls.logo_image.original}
          alt={episode.title}
          borderRadius="15px"
        />
        <MainTitle
          title={episode.title}
          subtitle={channel.title}
          linkTo={`/channels/${channel.id}`}
        />
        <PlayButton episodeId={episode.id} channelId={channel.id} />
      </div>

      <SectionTitle
        title={`${getFormattedDate(episode.uploaded_at)} · ${getDurationOnMin(
          episode.duration
        )}`}
      />

      <DescriptionContainer content={episode.description} />

      <EpisodeListContainer
        title={`More episodes`}
        loading={isLoading}
        episodes={episodesData}
      />

      <style jsx>{`
        .title-container {
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          grid-gap: 1rem;
          position: relative;
        }
        .title-container > :global(div:nth-child(2)) {
          margin-top: 0rem;
        }
        @media screen and (min-width: 768px) {
          .title-container {
            grid-template-columns: 1fr 2.5fr;
          }
          .title-container > :global(button) {
            bottom: 4rem;
            left: 30%;
          }
        }
        @media screen and (min-width: 1024px) {
          .title-container {
            grid-template-columns: 1fr 4fr;
            grid-gap: 2rem;
          }
          .title-container > :global(button) {
            left: 23%;
          }
        }
      `}</style>
    </Layout>
  )
}

export default PodcastPage
