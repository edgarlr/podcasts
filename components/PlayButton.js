import { usePlayer } from 'contexts'
import { MdPlayArrow } from 'react-icons/md'
import { colors } from 'styles/theme'
import { useFetchPlaylist } from 'hooks/useFetchPlaylist'

const PlayButton = ({ episodeId, channelId }) => {
  const { clientPlaylist, isLoading } = useFetchPlaylist(channelId)

  const { SetCurrentIndex, SetPlaylist } = usePlayer()

  const onPlayClick = () => {
    if (clientPlaylist) {
      SetPlaylist(clientPlaylist)

      for (let i = 0; i < clientPlaylist.length; i++) {
        if (clientPlaylist[i].id === episodeId) {
          SetCurrentIndex(i);
          return;
        }
      }
    }
  }

  return (
    <button disabled={isLoading} onClick={() => onPlayClick()}>  
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
