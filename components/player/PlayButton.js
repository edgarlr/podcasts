import { usePlayer } from 'lib/contexts';
import { MdPlayArrow } from 'react-icons/md';
import { colors } from 'styles/theme';
import { useFetchPlaylist } from 'lib/hooks';
import PropTypes from 'prop-types';

const PlayButton = ({ episodeId, channelId }) => {
  const { clientPlaylist, isLoading } = useFetchPlaylist(channelId);

  const { SetCurrentIndex, SetPlaylist, audioRef, current } = usePlayer();

  const onPlayClick = () => {
    if (clientPlaylist) {
      SetPlaylist(clientPlaylist);
      for (let i = 0; i < clientPlaylist.length; i++) {
        if (clientPlaylist[i].id === episodeId) {
          audioRef.current.src = clientPlaylist[i].urls.high_mp3;
          audioRef.current.play();
          SetCurrentIndex(i);
          break;
        }
      }
    }
  };

  return (
    <button
      className="play-button"
      disabled={isLoading || (current && current.id === episodeId)}
      onClick={() => onPlayClick()}
      aria-label="Play podcast"
    >
      <MdPlayArrow color="white" size="2rem" aria-hidden="true" />

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
          right: 1.5rem;
          transform: translateY(-55%);
          opacity: 1;
          transition: 0.2s;
        }
        .play-button:disabled {
          opacity: 0.2;
        }
      `}</style>
    </button>
  );
};

export default PlayButton;

PlayButton.propTypes = {
  episodeId: PropTypes.number.isRequired,
  channelId: PropTypes.number.isRequired,
};
