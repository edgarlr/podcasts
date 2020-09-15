import React, { useContext} from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { colors } from 'styles/theme'
import { usePlaylist } from 'hooks/usePlaylist'
import { PlayerContext } from 'contexts/PlayerContext'

const PlayButton = ({ episodeId, channelId }) => {
  const { playlist, isLoading } = usePlaylist(channelId)

  const {
    SetLoading,
    SetCurrent,
    SetCurrentIndex,
    SetPlaylist,
    currentSong,
  } = useContext(PlayerContext)

  const onPlayClick = () => {
    if (playlist) {
      SetLoading(true)
      SetPlaylist(playlist)

      for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].id === episodeId) {
          SetCurrent(playlist[i]);
          SetCurrentIndex(i);
          SetLoading(false)
          return;
        }
      }
    }
  }

  return (
    <button disabled={isLoading || currentSong.id === episodeId} onClick={() => onPlayClick()}>  
      <MdPlayArrow color='white' size='2rem' />

      <style jsx>{`
        button {
          outline: none;
          background: ${colors.black};
          border-radius: 50%;
          border: none;
          height: 3rem;
          width: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          
          position: absolute;
          right: 1.5rem;
          transform: translateY(-60%);
          opacity: 1;
          transition: .2s;
        }
        button:disabled {
          opacity: .2;
        }  
      `}</style>
    </button>
  )
}

export default PlayButton
