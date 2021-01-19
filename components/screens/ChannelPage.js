import MainTitle from 'components/MainTitle';
import Layout from 'components/common/Layout';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import FollowButtonContainer from 'components/FollowButtonContainer';
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton';
import PropTypes from 'prop-types';
import { channelPropType, episodePropType } from 'lib/customPropTypes';
import ImgTranslucent from 'components/ImgTranslucent';
import DescriptionContainer from 'components/DescriptionContainer';
import { useIsMobile } from 'lib/hooks';

const ChannelPage = ({ channel, episodes, series }) => {
  const isMobile = useIsMobile();
  return (
    <Layout
      navigation
      headerText={channel.title}
      metaDescription={channel.description}
      pageTitle={`${channel.title} | Podcasts`}
      button={<FollowButtonContainer channel={channel} />}
    >
      <MainTitle
        title={channel.title}
        subtitle={channel.parent_channel_id && 'Serie'}
      />

      <ImgTranslucent
        url={
          channel.urls.banner_image.original || channel.urls.logo_image.original
        }
        borderRadius="20px"
        height={isMobile ? '35%' : '25%'}
        margin=".75rem 0"
      />

      {series.length === 0 && channel.description.length > 100 && (
        <DescriptionContainer data={channel.description} />
      )}

      <ChannelsCarousel title={`${channel.title}'S SERIES`} channels={series} />

      <EpisodesListWithSortButton
        episodes={episodes}
        title={`${episodes.length} available episodes`}
      />
    </Layout>
  );
};

export default ChannelPage;

ChannelPage.propTypes = {
  channel: channelPropType,
  episodes: PropTypes.arrayOf(episodePropType).isRequired,
  series: PropTypes.arrayOf(channelPropType).isRequired,
};
