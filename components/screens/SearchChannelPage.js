import { useRouter } from 'next/router';
import { useFetch } from 'lib/hooks';
import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import ClearSearchButton from 'components/search/ClearSearchButton';
import SearchErrorMessage from 'components/search/SearchErrorMessage';
import { getChannelsSearchUrl } from 'lib/constants';
import { ChannelsGrid } from 'components/channel/ChannelsGrid';

export const SearchChannelPage = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const channelsUrl = getChannelsSearchUrl(keyword);
  const { data, isLoading } = useFetch(channelsUrl, 'channels');

  const Content = () => (
    <>
      <MainTitle title={`"${keyword}" in search`} />
      <ChannelsGrid title="All channels" channels={data} loading={isLoading} />
    </>
  );

  return (
    <Layout
      navigation
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
