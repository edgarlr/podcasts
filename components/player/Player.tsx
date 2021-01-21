import { useState } from 'react'
import { useMediaQuery, useMediaSessions } from 'lib/hooks'
import { usePlayer } from 'lib/contexts'
import Portal from 'components/ui/Portal'
import MiniPlayer from 'components/player/MiniPlayer'
import PlayerContainer from 'components/player/PlayerContainer'
import { colors } from 'styles/theme'

const Player = () => {
  const { current } = usePlayer()
  const [fullView, setFullView] = useState(false)

  const handleModalClick = () => setFullView(!fullView)

  useMediaSessions()

  const isTablet = useMediaQuery(1023)
  return (
    <Portal selector="#player">
      {current && isTablet && (
        <div className={`container ${fullView ? 'fullmodal' : ''}`}>
          {!fullView ? (
            <MiniPlayer onClick={handleModalClick} />
          ) : (
            <PlayerContainer onClick={handleModalClick} />
          )}
        </div>
      )}
      {current && !isTablet && (
        <div className="container desktop">
          <PlayerContainer />
        </div>
      )}

      <style jsx>{`
        .container {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        .container {
          z-index: 20;
          position: fixed;
          right: 0;
          left: 0;
          bottom: 0;
          height: 5rem;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 -1px -1px -1px;
          border-radius: 20px 20px 0 0;
          transition: 0.2s;
          box-shadow: 0px -5px 20px rgba(255, 255, 255, 0.3);
        }
        .fullmodal {
          height: 95vh;
          box-shadow: 0px -35px 25px rgba(255, 255, 255, 1);
        }
        .desktop {
          width: 20rem;
          height: 100%;
          top: 0;
          left: auto;
          border-radius: 20px 0 0;
          box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
        }
        @media screen and (min-width: 1440px) {
          .desktop {
            width: 22rem;
          }
        }
        @media screen and (display-mode: standalone) {
          .container {
            padding: 0 1rem 1.5rem;
          }
        }
      `}</style>
    </Portal>
  )
}

export default Player
