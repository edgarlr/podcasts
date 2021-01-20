import { usePlayer } from 'lib/contexts'
import { colors } from 'styles/theme'
import { getChannelEpisodesUrl } from 'lib/constants'
import { useFetch } from 'lib/hooks'
import PlayArrow from 'components/icons/PlayArrow'

type Props = {
  episodeId: TEpisode['id']
  channelId: TChannel['id']
}

const PlayButton = ({ episodeId, channelId }: Props) => {
  const channelEpisodesUrl = getChannelEpisodesUrl(channelId)
  const { data: episodesData, isLoading } = useFetch(
    channelEpisodesUrl,
    'audio_clips'
  )

  const { SetCurrentIndex, SetPlaylist, audioRef, current } = usePlayer()

  const onPlayClick = () => {
    if (episodesData) {
      SetPlaylist(episodesData)
      for (let i = 0; i < episodesData.length; i++) {
        if (episodesData[i].id === episodeId) {
          audioRef.current.src = episodesData[i].urls.high_mp3
          audioRef.current.play()
          SetCurrentIndex(i)
          break
        }
      }
    }
  }

  return (
    <button
      className="play-button"
      disabled={isLoading || (current && current.id === episodeId)}
      onClick={() => onPlayClick()}
      aria-label="Play podcast"
    >
      <PlayArrow />

      <style jsx>{`
        .play-button {
          outline: none;
          background: ${colors.black};
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
          background: ${colors.whiteHover};
        }
        .play-button:hover :global(svg) {
          fill: ${colors.black};
        }
        .play-button:disabled {
          opacity: 0.2;
        }
      `}</style>
    </button>
  )
}

export default PlayButton
