import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import { useFavs } from 'lib/contexts';
import { ChannelsGrid } from 'components/channel/ChannelsGrid';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import PropTypes from 'prop-types';
import { channelShortPropType } from 'lib/customPropTypes';
import dynamic from 'next/dynamic';

const DynamicSearch = dynamic(() => import('components/screens/SearchModal'), {
  ssr: false,
});

const Homepage = ({ channels }) => {
  const { myList } = useFavs();

  return (
    <Layout
      headerText="Podcasts"
      pageTitle="Podcast App"
      button={<DynamicSearch />}
    >
      <MainTitle title="Podcasts" />

      <ChannelsCarousel title="Followed" channels={myList} />
      <ChannelsGrid title="featured shows" channels={channels} />
    </Layout>
  );
};

export default Homepage;

Homepage.propTypes = {
  channels: PropTypes.arrayOf(channelShortPropType).isRequired,
};
