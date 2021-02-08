import SectionTitle from 'components/SectionTitle'
import { usePlayer } from 'lib/hooks/use-player'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import EpisodeCardSkeleton from './EpisodeCard/EpisodeCardSkeleton'

type Props = {
  title: string
  episodes: TEpisode[]
  searchCards?: boolean
  loading?: boolean
  button?: React.ReactNode
}

export default function EpisodeListContainer({
  title,
  episodes = [],
  loading = false,
  button = null,
  searchCards = false,
}: Props) {
  const { current } = usePlayer()

  if (!loading && episodes.length === 0) return null

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
              isActive={current && current.id === clip.id}
              info={!searchCards ? null : clip.channel.title}
            />
          ))}
    </section>
  )
}
