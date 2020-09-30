import MainTitle from 'components/MainTitle';
import Layout from 'components/Layout';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import FollowButtonContainer from 'components/FollowButtonContainer';
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton';
import PropTypes from 'prop-types';
import { channelPropType, episodePropType } from 'lib/customPropTypes';
import ImgTranslucent from 'components/ImgTranslucent';

const ChannelPage = ({ channel, episodes, series }) => (
  <Layout
    navigation
    headerText={channel.title}
    pageTitle={channel.title + ' | Podcasts'}
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
      height="35%"
      margin="1.5rem 0 0.75rem"
    />

    <ChannelsCarousel title={`${channel.title}'S SERIES`} channels={series} />

    <EpisodesListWithSortButton
      episodes={episodes}
      title={`${episodes.length} episodes`}
    />
  </Layout>
);

export default ChannelPage;

ChannelPage.propTypes = {
  channel: channelPropType,
  episodes: PropTypes.arrayOf(episodePropType).isRequired,
  series: PropTypes.arrayOf(channelPropType).isRequired,
};
