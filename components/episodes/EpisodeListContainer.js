import { SectionTitle } from 'components/SectionTitle';
import { usePlayer } from 'lib/contexts';
import EpisodeCard from './EpisodeCard';
import EpisodeCardSkeleton from './EpisodeCardSkeleton';

export default function EpisodeListContainer(props) {
  const {
    title,
    episodes = [],
    loading = false,
    button = null,
    searchCards = null,
  } = props;

  const { current } = usePlayer();

  if (!loading && episodes.length === 0) return null;

  return (
    <div>
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
    </div>
  );
}
