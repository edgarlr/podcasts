import { usePlayer } from 'lib/contexts';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import MiniPlayerSkeleton from './MiniPlayerSkeleton';
import { colors, fontWeight } from 'styles/theme';
import ProgressCircle from './ProgressCircle';
import { PodcastTitle } from './PodcastTitle';
import ImgTranslucent from 'components/ImgTranslucent';
import PropTypes from 'prop-types';
import { useMediaControls } from 'lib/hooks';

export default function MiniPlayer({ handleModalClick }) {
  const { current, loading, isPlaying } = usePlayer();
  const { toggleAudio } = useMediaControls();

  if (!current) return <MiniPlayerSkeleton />;

  return (
    <>
      <div className="container">
        <button
          className="nav-button"
          onClick={handleModalClick}
          aria-label="Expand Player"
        />

        <div className="img-container" onClick={() => handleModalClick()}>
          <ImgTranslucent
            url={current.urls.image || current.channel.urls.logo_image.original}
            alt={current.title}
            fullBlur
            borderRadius="10px"
          />
        </div>

        <div className="info" onClick={() => handleModalClick()}>
          <PodcastTitle
            title={current.title}
            fontSize=".9rem"
            alwaysJustify="flex-start"
          />
          <h4>{current.channel.title}</h4>
        </div>

        <button
          className="play-button"
          disabled={loading}
          onClick={() => toggleAudio()}
        >
          <ProgressCircle size={50} strokeWidth={2} circleStroke="#fff" />

          {isPlaying ? (
            <MdPause color="white" size="2.2em" />
          ) : (
            <MdPlayArrow color="white" size="2.2em" />
          )}
        </button>
      </div>

      <style jsx>{`
        button {
          background: ${colors.black};
        }
        h3 {
          color: ${colors.white};
        }
        h4 {
          color: ${colors.gray};
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        button[disabled] {
          opacity: 0.3;
        }
        .container {
          max-width: 100%;
          display: grid;
          grid-template-columns: 3rem 1fr 3rem;
          grid-gap: 1rem;
          align-items: center;
          cursor: pointer;
        }
        .nav-button {
          outline: none;
          border: none;
          height: 3px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .img-container {
          flex-grow: 1;
          width: 100%;
        }
        .info {
          max-width: 100%;
          max-width: 20rem;
          overflow-x: hidden;
        }
        h4 {
          flex-grow: 2;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.7rem;
          margin: 6px 0 0;
          text-transform: uppercase;
        }
        .play-button {
          outline: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border-radius: 50%;
          height: 3rem;
          width: 3rem;
          transition: background 0.2s;
        }
        .play-button:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
}

MiniPlayer.propTypes = {
  handleModalClick: PropTypes.func.isRequired,
};
