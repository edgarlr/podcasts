import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import { useRouter } from 'next/router';
import { useSearch } from 'lib/hooks';
import ClearSearchButton from 'components/search/ClearSearchButton';
import EpisodeListContainer from 'components/episodes/EpisodeListContainer';
import SearchErrorMessage from 'components/search/SearchErrorMessage';

export const SearchEpisodesPage = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const episodesUrl = `https://api.audioboom.com/audio_clips?find[query]=${keyword}&api_version=1`;
  const { data, isLoading } = useSearch(episodesUrl, 'audio_clips');

  const Content = () => (
    <>
      <MainTitle title={`"${keyword}" in search`} />
      <EpisodeListContainer
        title="All Episodes"
        episodes={data}
        loading={isLoading}
      />
    </>
  );

  return (
    <Layout
      navigation={true}
      headerText={`"${keyword}" in search`}
      pageTitle="Podcasts"
      button={<ClearSearchButton />}
    >
      {!isLoading && data.length === 0 ? (
        <SearchErrorMessage keyword={keyword} />
      ) : (
        <Content />
      )}
    </Layout>
  );
};
