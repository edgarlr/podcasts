import useSWR from 'swr';

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((r) => r.body.audio_clips);

export const useFetchPlaylist = (channelId) => {
  const URI = `https://api.audioboom.com/channels/${channelId}/audio_clips?api_version=1`;

  const { data, error } = useSWR(URI, fetcher);

  return {
    clientPlaylist: data,
    isLoading: !data && !error,
    isError: error,
  };
};
