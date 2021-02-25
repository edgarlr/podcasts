import { ProgressBar } from './ProgressBar'
import { PodcastTitle } from './PodcastTitle'
import TranslucentImage from '@components/ui/TranslucentImage'
import { usePlayer, usePlayerControls } from 'lib/hooks/use-player'
import Replay30 from 'components/icons/Replay30'
import Pause from 'components/icons/Pause'
import PlayArrow from 'components/icons/PlayArrow'
import Forward30 from 'components/icons/Forward30'
import IconButton from '@components/ui/IconButton'

const FullPlayer = () => {
  const { loading, isPlaying, current } = usePlayer()

  const { seekForward, replay, toggleAudio } = usePlayerControls()

  return (
    <div className="container">
      <TranslucentImage
        url={current.urls.image || current.channel.urls.logo_image.original}
        alt={`${current.title} cover`}
        blur="large"
        width={200}
        height={200}
        style={{ margin: '0 auto' }}
      />

      <div className="info">
        <PodcastTitle title={current.title} />
        <p>{current.channel.title}</p>
      </div>

      <div className="main-player">
        <IconButton
          onClick={() => replay(10)}
          ariaLabel="Seek backawards 10 Seconds"
          className="controller-button"
        >
          <Replay30 width={40} height={40} />
        </IconButton>

        <button
          className="play-button"
          disabled={loading}
          onClick={() => toggleAudio()}
          aria-label="Toggle play"
        >
          {isPlaying ? (
            <Pause width={44} height={44} />
          ) : (
            <PlayArrow width={44} height={44} />
          )}
        </button>

        <IconButton
          onClick={() => seekForward(30)}
          ariaLabel="Seek forward 30 seconds"
          className="controller-button"
        >
          <Forward30 width={40} height={40} />
        </IconButton>
      </div>

      <ProgressBar />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20vh 0 10vh;
          bottom: 1.5rem;
          height: 100%;
          width: 75%;
          margin: 0 auto;
          position: relative;
        }
        p {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: var(--font-sm);
          margin: 8px 0;
          color: var(--primary-40);
          font-weight: normal;
        }
        .info {
          width: 100%;
          max-width: 20rem;
          margin: 0;
          text-align: center;
          z-index: 100;
        }
        .main-player {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0;
        }

        .play-button {
          outline: none;
          width: 4.75rem;
          height: 4.75rem;
          border-radius: 50%;
          border: var(--default-border);
          color: var(--secondary);
          background: none;
          transition: border, background-color 0.2s;
        }
        .play-button[disabled] {
          opacity: 0.3;
        }
        .play-button:focus,
        .play-button:hover {
          outline: none;
          background: var(--primary-90);
        }

        .main-player > :global(.controller-button) {
          color: white;
          height: 3.5rem;
          width: 3.5rem;
        }

        .main-player > :global(.controller-button:hover) {
          background: var(--primary-95);
        }

        @media screen and (max-height: 668px) {
          .container {
            padding: 15vh 0 10vh;
          }
        }
        @media screen and (max-height: 568px) {
          .container {
            padding: 12vh 0 10vh;
          }
        }

        @media screen and (min-width: 766px) and (max-width: 1023px) and (orientation: portrait) {
          .container {
            padding: 3rem 0 2rem;
            width: 50%;
            max-height: 40rem;
          }
        }
      `}</style>
    </div>
  )
}

export default FullPlayer
