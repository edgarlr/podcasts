import { useState } from 'react';
import { useMediaSessions } from 'lib/hooks';
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

  return (
    <PlayerPortal selector="#player">
      {current && (
        <div className={fullView && 'fullmodal'}>
          {!fullView ? (
            <MiniPlayer handleModalClick={handleModalClick} />
          ) : (
            <Player handleModalClick={handleModalClick} />
          )}
        </div>
      )}

      <AudioElement />

      <style jsx>{`
        div {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        div {
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
        div.fullmodal::after {
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
