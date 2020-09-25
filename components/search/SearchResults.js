import { useSearch } from 'lib/hooks';
import { ChannelsCarousel } from 'components/channel/ChannelsCarousel';
import EpisodeListContainer from 'components/episodes/EpisodeListContainer';
import SeeAllButton from 'components/search/SeeAllButton';
import SearchErrorMessage from 'components/search/SearchErrorMessage';

const SearchResults = ({ keyword }) => {
  const channelsUrl = `https://api.audioboom.com/channels?find[title]=${keyword}&api_version=1`;
  const { data: channelsData, isLoading: channelsLoading } = useSearch(
    channelsUrl,
    'channels',
    4
  );

  const episodesUrl = `https://api.audioboom.com/audio_clips?find[query]=${keyword}&api_version=1`;
  const { data: episodesData, isLoading: episodesLoading } = useSearch(
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
