import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import { useFavs } from 'lib/contexts';
import { ChannelsGrid } from 'components/channel/ChannelsGrid';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import PropTypes from 'prop-types';
import { channelShortPropType } from 'lib/customPropTypes';
import dynamic from 'next/dynamic';
// import ChannelsList from 'components/channel/ChannelList';

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

      {/* <div className="list-container">
        <ChannelsList title="Followed" channels={channels.slice(0, 10)} />
        <ChannelsList title="Followed" channels={channels.slice(11)} />
      </div> */}

      <style jsx>{`
        .list-container {
          width: 100%;
          display: flex;
        }
      `}</style>
    </Layout>
  );
};

export default Homepage;

Homepage.propTypes = {
  channels: PropTypes.arrayOf(channelShortPropType).isRequired,
};
