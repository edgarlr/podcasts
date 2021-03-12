import { usePlayer } from 'lib/hooks/use-player'
import FullPlayerSkeleton from './FullPlayerSkeleton'
import Queue from './Queue'
import FullPlayer from './FullPlayer'
import { MouseEvent, useState } from 'react'
import IconButton from 'components/ui/IconButton'
import ChevronDown from 'components/icons/ChevronDown'
import PlaylistPlay from 'components/icons/PlaylistPlay'

const PlayerContainer = ({
  onClick,
}: {
  onClick?: (event?: MouseEvent) => void
}) => {
  const [showPlaylist, setShowPlaylist] = useState(false)

  const { current } = usePlayer()

  if (!current) return <FullPlayerSkeleton />

  return (
    <>
      {onClick && (
        <div className="close-button" aria-label="Minimize Player">
          <IconButton
            onClick={onClick}
            ariaLabel="Minimize player"
            variant="secondary"
          >
            <ChevronDown fill="var(--secondary)" width="32" height="32" />
          </IconButton>
        </div>
      )}

      {showPlaylist ? (
        <button
          onClick={() => setShowPlaylist(false)}
          className="button close-queue-button"
        >
          Queue
          <span>
            <ChevronDown />
          </span>
        </button>
      ) : (
        <button
          onClick={() => setShowPlaylist(true)}
          className="button playing-next-button"
        >
          Playing next
          <span>
            <PlaylistPlay />
          </span>
        </button>
      )}

      {!showPlaylist ? <FullPlayer /> : <Queue />}

      <style jsx>{`
        .close-button {
          z-index: 3;
          position: absolute;
          left: 1rem;
          top: 1.5rem;
        }
        .button {
          transform: scale(1);
          z-index: 1;
          transition: transform 0.1s;
        }
        .button:hover {
          transform: scale(1.025);
        }
        .playing-next-button {
          position: absolute;
          bottom: 0.5rem;
          left: 2.5rem;
          right: 2.5rem;
          width: calc(100% - 5rem);
          margin: 0;
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          color: var(--white);
          font-weight: bold;
          cursor: pointer;
          border: none;
          border-top: 1px solid var(--primary-80);
        }
        .close-queue-button {
          z-index: 2;
          position: absolute;
          top: 1.5rem;
          width: 40%;
          left: 0;
          right: 0;
          margin: 0 auto;
          color: white;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 1rem 0 0.5rem;
        }

        @media screen and (display-mode: standalone) {
          .playing-next-button {
            bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default PlayerContainer
