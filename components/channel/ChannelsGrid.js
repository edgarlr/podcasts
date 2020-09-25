import { SectionTitle } from 'components/SectionTitle';
import Grid from 'components/ui/Grid';
import { PodcastCover } from './PodcastCover';
import PodcastCoverSkeleton from './PodcastCoverSkeleton';

export const ChannelsGrid = (props) => {
  const { title, channels = [], sectionButton = null, loading = false } = props;

  if (!loading && channels.length === 0) return null;

  return (
    <>
      <SectionTitle title={title} button={sectionButton} />
      <Grid>
        {loading
          ? [1, 2, 3, 4, 5, 6].map((card) => (
              <PodcastCoverSkeleton key={card} />
            ))
          : channels.map((channel) => (
              <PodcastCover channel={channel} key={channel.id} />
            ))}
      </Grid>
    </>
  );
};
