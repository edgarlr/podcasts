import { useSortEpisodes } from 'lib/hooks'
import SortByButton from 'components/SortByButton'
import EpisodeListContainer from './EpisodeListContainer'

const EpisodesListWithSortButton = ({
  title,
  episodes,
}: {
  title: string
  episodes: TEpisode[]
}) => {
  const [list, setList, sortList] = useSortEpisodes(episodes, 'uploaded_at')

  const handleFilterClick = (type: 'latest' | 'popular' | 'oldest') => {
    if (type === 'latest') {
      setList(sortList('uploaded_at'))
    } else if (type === 'popular') {
      setList(sortList('counts'))
    } else {
      setList(sortList('uploaded_at', true))
    }
  }

  return (
    <EpisodeListContainer
      title={title}
      episodes={list as TEpisode[]}
      button={<SortByButton handleFilterClick={handleFilterClick} />}
    />
  )
}

export default EpisodesListWithSortButton
