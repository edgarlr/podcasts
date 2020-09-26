import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import { useFavs } from 'lib/contexts';
import SearchModal from 'components/screens/SearchModal';
import { ChannelsGrid } from 'components/channel/ChannelsGrid';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import PropTypes from 'prop-types';
import { channelShortPropType } from 'lib/customPropTypes';

const Homepage = ({ channels }) => {
  const { myList } = useFavs();

  return (
    <Layout
      headerText="Podcasts"
      pageTitle="Podcast App"
      button={<SearchModal />}
    >
      <MainTitle title="Podcasts" />

      <section>
        <ChannelsCarousel title="Followed" channels={myList} />
      </section>

      <section>
        <ChannelsGrid title="featured shows" channels={channels} />
      </section>
    </Layout>
  );
};

export default Homepage;

Homepage.propTypes = {
  channels: PropTypes.arrayOf(channelShortPropType).isRequired,
};
