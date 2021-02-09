import { usePlayer } from 'lib/hooks/use-player'
import MiniPlayerSkeleton from './MiniPlayerSkeleton'
import ProgressCircle from './ProgressCircle'
import { PodcastTitle } from './PodcastTitle'
import TranslucentImage from '@components/ui/TranslucentImage'
import Pause from 'components/icons/Pause'
import PlayArrow from 'components/icons/PlayArrow'
import { CSSProperties, MouseEvent } from 'react'

type Props = {
  onClick: (event?: MouseEvent) => void
  style?: CSSProperties
}

export default function MiniPlayer({ onClick, style = {} }: Props) {
  const { current, loading, isPlaying, toggleAudio } = usePlayer()

  if (!current || loading) return <MiniPlayerSkeleton />

  return (
    <div className="container" style={style}>
      <button
        className="expand-button"
        onClick={onClick}
        aria-label="Expand Player"
      />

      <div className="img-container" onClick={onClick}>
        <TranslucentImage
          url={current.urls.image || current.channel.urls.logo_image.original}
          alt={`${current.title} cover`}
          width={48}
          height={48}
          blur="large"
        />
      </div>

      <div className="info" onClick={onClick}>
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
        aria-label="Toggle Play"
      >
        <ProgressCircle
          size={48}
          strokeWidth={2}
          circleStroke="var(--secondary)"
        />

        {isPlaying ? <Pause /> : <PlayArrow />}
      </button>

      <style jsx>{`
        .container {
          max-width: 100%;
          height: 100%;
          padding: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        button {
          background: var(--primary);
        }

        button[disabled] {
          opacity: 0.3;
        }

        .expand-button {
          outline: none;
          border: none;
          height: 3px;
          width: 2rem;
          border-radius: 5px;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .img-container {
          flex: 0 0 3rem;
          width: 100%;
          z-index: 1;
        }
        .info {
          flex: 0 0 1;
          overflow: hidden;
          margin: 0 1rem;
          z-index: 2;
        }
        .play-button {
          flex: 0 0 3rem;
          width: 3rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          color: var(--secondary);
          border-radius: 50%;
          transition: background-color 0.2s;
        }
        .play-button:hover {
          background: var(--primary-95);
        }
        h4 {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: var(--font-xs);
          margin: 4px 0 0;
          text-transform: uppercase;
          color: var(--primary-40);
          font-weight: normal;
        }
      `}</style>
    </div>
  )
}
