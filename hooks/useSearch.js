import useSWR from 'swr';

export const useSearch = (url, section, limit = null) => {
  const fetcher = (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((r) => r.body[section]);

  if (limit) url = `${url}&page[items]=${limit}`;

  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
};
