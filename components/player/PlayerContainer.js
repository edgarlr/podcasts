import { usePlayer } from 'lib/contexts'
import FullPlayerSkeleton from './FullPlayerSkeleton'
import PropTypes from 'prop-types'
import Queue from './Queue'
import FullPlayer from './FullPlayer'
import { useState } from 'react'
import IconButton from 'components/ui/IconButton'
import ChevronDown from 'components/icons/ChevronDown'
import PlaylistPlay from 'components/icons/PlaylistPlay'

const PlayerContainer = ({ handleModalClick }) => {
  const { current } = usePlayer()

  const [showPlaylist, setShowPlaylist] = useState(false)

  if (!current) return <FullPlayerSkeleton />

  return (
    <>
      {handleModalClick && (
        <div className="close-button" aria-label="Minimize Player">
          <IconButton
            onClick={handleModalClick}
            ariaLabel="Minimize player"
            variant="secondary"
          >
            <ChevronDown />
          </IconButton>
        </div>
      )}

      <button onClick={() => setShowPlaylist(!showPlaylist)}>
        {!showPlaylist ? (
          <div className="queue-button">
            Playing next
            <span>
              <PlaylistPlay />
            </span>
          </div>
        ) : (
          <div className="queue-button now-playing">
            Queue
            <span>
              <ChevronDown />
            </span>
          </div>
        )}
      </button>

      {!showPlaylist ? <FullPlayer /> : <Queue />}

      <style jsx>{`
        .container {
          height: 100%;
        }
        .player-container {
          overflow-y: scroll;
          padding: 0 2rem;
        }
        .close-button {
          z-index: 22;
          position: absolute;
          left: 1rem;
          top: 1.5rem;
        }
        .queue-button {
          z-index: 21;
          position: absolute;
          top: auto;
          bottom: 1rem;
          left: 3rem;
          right: 3rem;
          color: white;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0 0 0;
          margin: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          transition: 0.1s;
        }
        @media screen and (display-mode: standalone) {
          .queue-button {
            bottom: 2rem;
          }
        }
        .queue-button:hover {
          transform: scale(1.025);
        }
        .now-playing {
          border: none;
          bottom: auto;
          top: 1.5rem;
          left: 30%;
          right: 30%;
        }
        @media screen and (min-width: 766px) and (max-width: 1023px) and (orientation: portrait) {
          .player-container {
            padding: 3rem 8rem 2rem;
            max-height: 40rem;
          }
        }
      `}</style>
    </>
  )
}

export default PlayerContainer

PlayerContainer.propTypes = { handleModalClick: PropTypes.func }
