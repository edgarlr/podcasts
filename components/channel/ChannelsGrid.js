import { SectionTitle } from 'components/SectionTitle';
import Grid from 'components/ui/Grid';
import { PodcastCover } from './PodcastCover';
import PodcastCoverSkeleton from './PodcastCoverSkeleton';
import PropTypes from 'prop-types';

export const ChannelsGrid = ({ title, channels, sectionButton, loading }) => {
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

ChannelsGrid.defaultProps = {
  channels: [],
  sectionButton: null,
  loading: false,
};

ChannelsGrid.propTypes = {
  title: PropTypes.string.isRequired,
  channels: PropTypes.array.isRequired,
  sectionButton: PropTypes.element,
  loading: PropTypes.bool,
};
