import MainTitle from 'components/MainTitle'
import TranslucentImage from '@components/ui/TranslucentImage'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import PlayButton from '@components/PlayButton'
import Description from '@components/ui/Description'

const EpisodeHeader = ({ episode }: { episode: TEpisode }) => {
  const { channel } = episode
  return (
    <section>
      <div className="title-container">
        <TranslucentImage
          url={episode.urls?.image || channel.urls.logo_image.original}
          alt={`${episode.title} cover`}
          width={150}
          height={150}
        />
        <MainTitle
          title={episode.title}
          subtitle={channel.title}
          linkTo={`/channels/${channel.id}`}
        />
      </div>

      <p className="info">{`${getFormattedDate(
        episode.uploaded_at
      )} · ${getDurationOnMin(episode.duration)}`}</p>

      <Description content={episode.description} />

      <div className="actions-buttons">
        <PlayButton episode={episode} channelId={channel.id} />
      </div>

      <style jsx>{`
        .title-container {
          margin: 1.5rem 0;
          position: relative;
          display: flex;
        }
        .title-container > :global(:first-child) {
          flex: 0 0 128px;
        }
        .title-container > :global(:nth-child(2)) {
          flex: 1;
          margin-left: 1rem;
        }
        .info {
          font-size: var(--font-xs);
          font-weight: bold;
          color: var(--primary-60);
          text-transform: uppercase;
          margin: 2rem 0 0;
        }
        .actions-buttons {
          margin: 2rem 0 3rem;
          display: flex;
          align-items: center;
        }
        @media screen and (min-width: 768px) {
          .title-container > :global(:first-child) {
            flex: 0 0 150px;
          }
          .title-container > :global(:nth-child(2)) {
            margin-left: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default EpisodeHeader
