import SectionTitle from 'components/SectionTitle'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import EpisodeCardSkeleton from './EpisodeCard/EpisodeCardSkeleton'

type Props = {
  title: string
  episodes: TEpisode[]
  searchCards?: boolean
  loading?: boolean
  button?: React.ReactNode
}

const EpisodesList = ({
  title,
  episodes = [],
  loading = false,
  button = null,
  searchCards = false,
}: Props) => {
  if (!loading && (!episodes || episodes.length === 0)) return null

  return (
    <section>
      <SectionTitle title={title} button={button} />

      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
            <EpisodeCardSkeleton key={card} />
          ))
        : episodes.map((clip) => (
            <EpisodeCard
              clip={clip}
              key={clip.id}
              info={searchCards && (clip.channel?.title || null)}
            />
          ))}
    </section>
  )
}

export default EpisodesList
