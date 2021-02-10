import SortButton from '@components/SortButton'
import { useState } from 'react'
import EpisodesList from './EpisodesList'

const EpisodesListWithSortButton = ({
  title,
  episodes,
}: {
  title: string
  episodes: TEpisode[]
}) => {
  const [key, setKey] = useState('uploaded_at')
  const [inverse, setInverse] = useState(false)

  const sortedEpisodes = (): TEpisode[] => {
    if (inverse) {
      return [...episodes].sort((a, b) =>
        a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
      )
    }
    if (key === 'counts') {
      return [...episodes].sort((a, b) =>
        a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0
      )
    }
    return [...episodes].sort((a, b) =>
      a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    )
  }

  const handleFilterClick = (type: 'latest' | 'popular' | 'oldest') => {
    if (type === 'latest') {
      setKey('uploaded_at')
    } else if (type === 'popular') {
      setKey('counts')
    } else {
      setKey('uploaded_at')
      setInverse(true)
    }
  }

  return (
    <EpisodesList
      title={title}
      episodes={sortedEpisodes()}
      button={<SortButton handleFilterClick={handleFilterClick} />}
    />
  )
}

export default EpisodesListWithSortButton
