import { useSortEpisodes } from 'hooks/useSortEpisodes';
import FiltersIcon from 'components/FiltersIcon';
import { SectionTitle } from 'components/SectionTitle';
import EpisodeList from './EpisodeList';

export default function EpisodeListContainer ({ audioClips }) {
  const [list, setList, sort_list] = useSortEpisodes(audioClips, 'uploaded_at')

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
    <div>
      <SectionTitle 
        title={`${audioClips.length} EPISODES`}
        button={<FiltersIcon handleFilterClick={handleFilterClick} />}
      />

      <EpisodeList audioClips={list} />
    </div>
  );
}
