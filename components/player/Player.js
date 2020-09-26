import { usePlayer } from 'lib/contexts';
import PlayerSkeleton from './PlayerSkeleton';
import { colors } from 'styles/theme';
import { ProgressBar } from './ProgressBar';
import { PodcastTitle } from './PodcastTitle';
import ImgTranslucent from 'components/ImgTranslucent';
import PropTypes from 'prop-types';
import {
  MdKeyboardArrowDown,
  MdSkipPrevious,
  MdPlayArrow,
  MdPause,
  MdSkipNext,
} from 'react-icons/md';

export const Player = (props) => {
  const {
    handleModalClick,
    handleProgress,
    toggleAudio,
    currentTime,
    duration,
    prevEpisode,
    nextEpisode,
  } = props;

  const { loading, currentIndex, playlist, isPlaying, current } = usePlayer();

  if (!current) return <PlayerSkeleton />;

  return (
    <>
      <button className="nav-button" onClick={() => handleModalClick()}>
        <MdKeyboardArrowDown size="2.5em" color={colors.white} />
      </button>

      <div className="container">
        <div className="img-container">
          <ImgTranslucent
            url={current.urls.image || current.channel.urls.logo_image.original}
            alt={current.title}
            fullBlur
            borderRadius="10%"
          />
        </div>

        <div className="info">
          <PodcastTitle title={current.title} />
          <h6>{current.channel.title}</h6>
        </div>

        <div className="main-player">
          <button className="controller-button" onClick={() => prevEpisode()}>
            <MdSkipPrevious color="white" size="3em" />
          </button>

          <button
            className="play-button"
            disabled={loading}
            onClick={() => toggleAudio()}
          >
            {isPlaying ? (
              <MdPause color="white" size="3em" />
            ) : (
              <MdPlayArrow color="white" size="3em" />
            )}
          </button>

          <button
            disabled={currentIndex === playlist.length - 1}
            className="controller-button"
            onClick={() => nextEpisode()}
          >
            <MdSkipNext color="white" size="3em" />
          </button>
        </div>

        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          handleProgress={handleProgress}
        />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2em 2em 0;
          height: 70%;
          color: white;
          position: relative;
        }
        .nav-button {
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          position: absolute;
          left: 1rem;
          top: 1.5rem;
        }
        .img-container {
          width: 80%;
          max-width: 250px;
          margin: 0 auto;
          position: relative;
        }
        .info {
          width: 90%;
          margin: 1em auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
        h6 {
          margin: 0;
          font-size: 12px;
          font-weight: 400;
          color: #a8a8a8;
          text-transform: uppercase;
        }
        button {
          outline: none;
        }
        button[disabled] {
          opacity: 0.3;
        }

        .main-player {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10%;
        }
        .controller-button {
          background: none;
          border: none;
        }
        .play-button {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid white;
          background: none;
        }
        .play-button:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

Player.propTypes = {
  handleModalClick: PropTypes.func.isRequired,
  handleProgress: PropTypes.func.isRequired,
  toggleAudio: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  prevEpisode: PropTypes.func.isRequired,
  nextEpisode: PropTypes.func.isRequired,
};
