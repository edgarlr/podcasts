import MainTitle from 'components/MainTitle';
import Layout from 'components/Layout';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import BannerImage from 'components/BannerImage';
import FollowButtonContainer from 'components/FollowButtonContainer';
import EpisodesListWithSortButton from 'components/episodes/EpisodesListWithSortButton';

const ChannelPage = ({ channel, episodes, series }) => (
  <Layout
    navigation={true}
    headerText={channel.title}
    pageTitle={channel.title + ' | Podcasts'}
    button={<FollowButtonContainer channel={channel} />}
  >
    <MainTitle title={channel.title} subtitle="Podcast" />

    <BannerImage
      bannerImage={
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
