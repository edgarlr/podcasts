import useSWR from 'swr';

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((r) => r.body);

export const useFetchChannels = () => {
  const URI = `https://api.audioboom.com/channels/recommended?api_version=2`;

  const { data, error } = useSWR(URI, fetcher);

  return {
    clientChannels: data,
    isLoading: !data && !error,
    isError: error,
  };
};
