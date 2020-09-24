import { useSortEpisodes } from 'hooks/useSortEpisodes';
import SortByButton from 'components/SortByButton';
import EpisodeListContainer from './EpisodeListContainer';

const EpisodesListWithSortButton = ({title, episodes, }) => {
  const [list, setList, sort_list] = useSortEpisodes(episodes, 'uploaded_at')

  const handleFilterClick = (type) => {
    if (type === 'latest') {
      setList(sort_list('uploaded_at'))
    }
    else if (type === 'popular') {
      setList(sort_list('counts'))
    }
    else {
      setList(sort_list('uploaded_at', true))
    }
  }

  return (
    <EpisodeListContainer 
      title={title}
      episodes={list} 
      button={<SortByButton handleFilterClick={handleFilterClick} />}
    />
  )
}

export default EpisodesListWithSortButton
