import SectionTitle from 'components/SectionTitle';
import PodcastCoverSkeleton from './PodcastCoverSkeleton';
import PropTypes, { oneOfType } from 'prop-types';
import { channelPropType, channelShortPropType } from 'lib/customPropTypes';
import ChannelCard from './ChannelCard';

const ChannelsList = ({ title, channels, loading }) => {
  if (!loading && channels.length === 0) return null;

  return (
    <div style={{ marginRight: '10%' }}>
      <SectionTitle title={title} />
      <div>
        {loading
          ? [1, 2, 3, 4, 5, 6].map((card) => (
              <PodcastCoverSkeleton key={card} />
            ))
          : channels.map((channel) => (
              <ChannelCard channel={channel} key={channel.id} />
            ))}
      </div>
    </div>
  );
};

ChannelsList.defaultProps = {
  channels: [],
  sectionButton: null,
  loading: false,
};

ChannelsList.propTypes = {
  title: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    oneOfType([channelPropType, channelShortPropType])
  ).isRequired,
  sectionButton: PropTypes.element,
  loading: PropTypes.bool,
};

export default ChannelsList;
