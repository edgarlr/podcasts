import { useEffect, useState } from 'react';

export const useSortEpisodes = (listToSort, originalKey) => {
  const [list, setList] = useState(listToSort);

  const sortList = (key, inverse = false) => {
    if (inverse) {
      return [...list].sort((a, b) =>
        a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
      );
    } else if (key === 'counts') {
      return [...list].sort((a, b) =>
        a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0
      );
    }
    return [...list].sort((a, b) =>
      a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    );
  };

  useEffect(() => {
    setList(sortList(originalKey));
  }, []);

  return [list, setList, sortList];
};
