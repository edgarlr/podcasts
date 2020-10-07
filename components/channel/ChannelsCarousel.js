import CarouselGrid from 'components/ui/CarouselGrid';
import SectionTitle from 'components/SectionTitle';
import { PodcastCover } from './PodcastCover';
import PodcastCoverSkeleton from './PodcastCoverSkeleton';
import PropTypes, { oneOfType } from 'prop-types';
import { channelPropType, channelShortPropType } from 'lib/customPropTypes';

export const ChannelsCarousel = (props) => {
  const { title, channels, sectionButton, loading } = props;

  if (!loading && channels.length === 0) return null;

  return (
    <>
      <SectionTitle title={title} button={sectionButton} />
      <CarouselGrid>
        {loading
          ? [1, 2, 3].map((card) => <PodcastCoverSkeleton key={card} />)
          : channels.map((channel, index) => (
              // For the cases where the api response width the same element twice
              <PodcastCover channel={channel} key={`${channel.id}${index}`} />
            ))}
      </CarouselGrid>
    </>
  );
};

ChannelsCarousel.defaultProps = {
  channels: [],
  sectionButton: null,
  loading: false,
};

ChannelsCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(
    oneOfType([channelPropType, channelShortPropType])
  ).isRequired,
  sectionButton: PropTypes.element,
  loading: PropTypes.bool,
};
