import SortButton from '@components/SortButton'
import { useState } from 'react'
import EpisodesList from './EpisodesList'

type SortOptions = {
  key: string
  inverse: boolean
}

const EpisodesListWithSortButton = ({
  title,
  episodes,
}: {
  title: string
  episodes: TEpisode[]
}) => {
  const [{ key, inverse }, setSort] = useState<SortOptions>({
    key: 'uploaded_at',
    inverse: false,
  })

  const sortedEpisodes = (): TEpisode[] => {
    if (key === 'counts') {
      return [...episodes].sort((a, b) =>
        a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0
      )
    }
    if (inverse) {
      return [...episodes].sort((a, b) =>
        a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
      )
    }
    return [...episodes].sort((a, b) =>
      a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    )
  }

  const handleFilterClick = (type: 'latest' | 'popular' | 'oldest') => {
    if (type === 'popular') return setSort({ key: 'counts', inverse: false })
    if (type === 'oldest') return setSort({ key: 'uploaded_at', inverse: true })
    return setSort({ key: 'uploaded_at', inverse: false })
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
