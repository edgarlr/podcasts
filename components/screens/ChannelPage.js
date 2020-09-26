import MainTitle from 'components/MainTitle';
import Layout from 'components/Layout';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import BannerImage from 'components/BannerImage';
import FollowButtonContainer from 'components/FollowButtonContainer';
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton';
import PropTypes from 'prop-types';

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

    <BannerImage
      url={
        channel.urls.banner_image.original || channel.urls.logo_image.original
      }
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
  channel: PropTypes.object.isRequired,
  episodes: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired,
};
