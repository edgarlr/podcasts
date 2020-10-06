import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import EpisodeListContainer from 'components/episodes/EpisodeListContainer';
import SeeAllButton from 'components/search/SeeAllButton';
import SearchErrorMessage from 'components/search/SearchErrorMessage';
import PropTypes from 'prop-types';
import { getChannelsSearchUrl, getEpisodesSearchUrl } from 'lib/constants';
import { useFetch } from 'lib/hooks';

const SearchResults = ({ keyword }) => {
  const channelsUrl = getChannelsSearchUrl(keyword);
  const { data: channelsData, isLoading: channelsLoading } = useFetch(
    channelsUrl,
    'channels',
    4
  );

  const episodesUrl = getEpisodesSearchUrl(keyword);
  const { data: episodesData, isLoading: episodesLoading } = useFetch(
    episodesUrl,
    'audio_clips',
    4
  );

  if (
    !episodesLoading &&
    !channelsLoading &&
    episodesData.length === 0 &&
    channelsData.length === 0
  ) {
    return <SearchErrorMessage keyword={keyword} />;
  }

  return (
    <>
      <ChannelsCarousel
        title="channels"
        sectionButton={<SeeAllButton section="channels" keyword={keyword} />}
        channels={channelsData}
        loading={channelsLoading}
      />

      <EpisodeListContainer
        title="Episodes"
        button={<SeeAllButton section="episodes" keyword={keyword} />}
        episodes={episodesData}
        loading={episodesLoading}
        searchCards
      />
    </>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  keyword: PropTypes.string.isRequired,
};
