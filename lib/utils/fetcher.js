export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((r) => r.body);
