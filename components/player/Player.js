import { useState } from 'react';
import { useMediaQuery, useMediaSessions } from 'lib/hooks';
import { usePlayer } from 'lib/contexts';
import PlayerPortal from 'components/player/PlayerPortal';
import MiniPlayer from 'components/player/MiniPlayer';
import AudioElement from 'components/player/AudioElement';
import PlayerContainer from 'components/player/PlayerContainer';
import { colors } from 'styles/theme';

const PlayerModal = () => {
  const { current } = usePlayer();
  const [fullView, setFullView] = useState(false);

  const handleModalClick = () => setFullView(!fullView);

  useMediaSessions();

  const isTablet = useMediaQuery(1023);
  return (
    <PlayerPortal selector="#player">
      {current && isTablet && (
        <div className={`container ${fullView ? 'fullmodal' : ''}`}>
          {!fullView ? (
            <MiniPlayer handleModalClick={handleModalClick} />
          ) : (
            <PlayerContainer handleModalClick={handleModalClick} />
          )}
        </div>
      )}
      {current && !isTablet && (
        <div className="container desktop">
          <PlayerContainer />
        </div>
      )}

      <AudioElement />

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
      `}</style>
    </PlayerPortal>
  );
};

export default PlayerModal;
