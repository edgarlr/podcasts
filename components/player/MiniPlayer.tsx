import { usePlayer } from 'lib/hooks/use-player'
import MiniPlayerSkeleton from './MiniPlayerSkeleton'
import ProgressCircle from './ProgressCircle'
import { PodcastTitle } from './PodcastTitle'
import ImgTranslucent from '@components/ui/ImgTranslucent'
import Pause from 'components/icons/Pause'
import PlayArrow from 'components/icons/PlayArrow'
import { MouseEvent } from 'react'

export default function MiniPlayer({
  onClick,
}: {
  onClick: (event?: MouseEvent) => void
}) {
  const { current, loading, isPlaying, toggleAudio } = usePlayer()

  if (!current) return <MiniPlayerSkeleton />

  return (
    <>
      <div className="container">
        <button
          className="nav-button"
          onClick={onClick}
          aria-label="Expand Player"
        />

        <div className="img-container" onClick={() => onClick()}>
          <ImgTranslucent
            url={current.urls.image || current.channel.urls.logo_image.original}
            alt={current.title}
            fullBlur
            style={{ borderRadius: '10px' }}
          />
        </div>

        <div className="info" onClick={() => onClick()}>
          <PodcastTitle
            title={current.title}
            style={{ fontSize: '0.9rem', justifyContent: 'flex-start' }}
          />
          <h4>{current.channel.title}</h4>
        </div>

        <button
          className="play-button"
          disabled={loading}
          onClick={() => toggleAudio()}
        >
          <ProgressCircle size={50} strokeWidth={2} circleStroke="#fff" />

          {isPlaying ? <Pause /> : <PlayArrow />}
        </button>
      </div>

      <style jsx>{`
        button {
          background: var(--black);
        }

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
          color: var(--gray-60);
          font-weight: normal;
        }
        h3 {
          color: var(--white);
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
  )
}
