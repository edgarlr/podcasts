import { CHANNELS_URL } from 'lib/constants';
import useSWR from 'swr';

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((r) => r.body);

export const useFetchChannels = () => {
  const { data, error } = useSWR(CHANNELS_URL, fetcher);

  return {
    clientChannels: data,
    isLoading: !data && !error,
    isError: error,
  };
};
