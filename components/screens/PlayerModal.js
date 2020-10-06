import { useState } from 'react';
import { useMediaQuery, useMediaSessions } from 'lib/hooks';
import { usePlayer } from 'lib/contexts';
import { Player } from 'components/player/Player';
import PlayerPortal from 'components/player/PlayerPortal';
import MiniPlayer from 'components/player/MiniPlayer';
import AudioElement from 'components/player/AudioElement';
import { colors } from 'styles/theme';

const PlayerModal = () => {
  const { current } = usePlayer();
  const [fullView, setFullView] = useState(false);
  const handleModalClick = () => setFullView(!fullView);

  useMediaSessions();

  const isLaptop = useMediaQuery(1024);
  return (
    <PlayerPortal selector="#player">
      {current && isLaptop && (
        <div className={`mobile-container ${fullView && 'fullmodal'}`}>
          {!fullView ? (
            <MiniPlayer handleModalClick={handleModalClick} />
          ) : (
            <Player handleModalClick={handleModalClick} />
          )}
        </div>
      )}
      {current && !isLaptop && (
        <div className="desktop-container">
          <Player />
        </div>
      )}

      <AudioElement />

      <style jsx>{`
        div {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        .desktop-container {
          z-index: 20;
          position: fixed;
          width: 18rem;
          right: 0;
          top: 0;
          bottom: 0;
          border-radius: 20px 0 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 1em;
        }
        @media screen and (min-width: 1440px) {
          .desktop-container {
            width: 20rem;
          }
        }
        .mobile-container {
          z-index: 20;
          position: fixed;
          height: 6em;
          right: 0;
          left: 0;
          bottom: 0;
          margin: 0 -1px -1px -1px;
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 1em;
          transition: 0.2s;
        }
        .fullmodal {
          height: 95%;
        }
        .mobile-container.fullmodal::after {
          content: ' ';
          position: absolute;
          top: -10%;
          left: 0;
          right: 0;
          bottom: 100%;
          z-index: -1;
          opacity: 0.9;
          background: ${colors.white};
        }
      `}</style>
    </PlayerPortal>
  );
};

export default PlayerModal;
