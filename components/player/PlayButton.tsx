import { usePlayer } from 'lib/hooks/use-player'
import { getChannelEpisodesUrl } from 'lib/constants'
import { useFetch } from 'lib/hooks/use-fetch'
import PlayArrow from 'components/icons/PlayArrow'

type Props = {
  episode: TEpisode
  channelId: TChannel['id']
}

const PlayButton = ({ episode, channelId }: Props) => {
  const channelEpisodesUrl = getChannelEpisodesUrl(channelId)
  const { data: episodesData, isLoading } = useFetch<TEpisode[]>(
    channelEpisodesUrl,
    'audio_clips'
  )

  const { current, setCurrentIndex, setPlaylist, play } = usePlayer()

  const onPlayClick = () => {
    if (!episodesData) return
    setPlaylist(episodesData)
    for (let i = 0; i < episodesData.length; i++) {
      if (episodesData[i].id === episode.id) {
        setCurrentIndex(i)
        play(episodesData[i])
        break
      }
    }
  }

  return (
    <button
      className="play-button"
      disabled={isLoading || (current && current.id === episode.id)}
      onClick={() => onPlayClick()}
      aria-label="Play podcast"
    >
      <PlayArrow />

      <style jsx>{`
        .play-button {
          outline: none;
          background: var(--black);
          border-radius: 50%;
          border: none;
          height: 2.8rem;
          width: 2.8rem;
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;
          right: 0;
          bottom: 0;
          transform: translateY(130%);
          opacity: 1;
          transition: 0.2s;
        }
        .play-button:hover {
          background: var(--gray-15);
        }
        .play-button:hover :global(svg) {
          fill: var(--black);
        }
        .play-button:disabled {
          opacity: 0.2;
        }
      `}</style>
    </button>
  )
}

export default PlayButton
