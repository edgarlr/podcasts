import { useContext } from 'react'
import {useRouter} from 'next/router';
import {PlayerContext} from 'contexts/PlayerContext'
import EpisodeCard from './EpisodeCard';
import EpisodeCardSkeleton from './EpisodeCardSkeleton';

export default function EpisodeList ({ audioClips, loading = false}) {
  const router = useRouter();

  const { 
    currentSongIndex,
    SetPlaylist
  } = useContext(PlayerContext)
  
  const handlePodcastClick = (podcast, channelId) => {
    SetPlaylist(audioClips)
    router.push('/[channel]/[podcast]', `/${channelId}/${podcast.id}`)
  }

  if (loading) {
    return (
      [1,2,3,4,5,6,7,8].map((card) => (
        <EpisodeCardSkeleton key={card}/>
      ))
    )
  }

  return (
    <div>
      {audioClips.map((clip, index) => (
        <EpisodeCard 
          handlePodcastClick={handlePodcastClick} 
          clip={clip} 
          key={clip.id} 
          isActive={currentSongIndex === index}
        />
      ))}
    </div>
  );
}
