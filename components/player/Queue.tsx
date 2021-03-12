import PlayCircle from 'components/icons/PlayCircle'
import { usePlayer, usePlayerControls } from 'lib/hooks/use-player'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import MiniPlayer from './MiniPlayer'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useIsMobile } from '@lib/hooks/use-media-queries'

const Queue = () => {
  const { playlist, currentIndex, current, setCurrentIndex } = usePlayer()

  const { play } = usePlayerControls()

  const router = useRouter()

  const isMobile = useIsMobile()

  const playerRef = useRef()

  useEffect(() => {
    if (playerRef.current && isMobile) {
      disableBodyScroll(playerRef.current)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isMobile])

  const onNowPlayingClick = (id: TEpisode['id']) => {
    router.push(`/episodes/${id}`)
  }

  const onPlayClick = (episode: TEpisode) => {
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === episode.id) {
        setCurrentIndex(i)
        play(playlist[i])
        break
      }
    }
  }

  return (
    <div className="container" ref={playerRef}>
      <h4 className="title">Now Playing</h4>
      <MiniPlayer
        onClick={() => onNowPlayingClick(current.id)}
        style={{ margin: '1rem 0', height: '5.25rem' }}
      />

      <h4 className="title">Next from: {current.channel.title}</h4>

      <ul className="episodes-list">
        {playlist.slice(currentIndex + 1).map((episode: TEpisode) => (
          <li key={episode.id}>
            <button
              onClick={() => onPlayClick(episode)}
              className="play-button"
            >
              <p className="episode-title">{episode.title}</p>
              <span className="episode-info">
                {getFormattedDate(episode.uploaded_at)}
                <b> · </b>
                {getDurationOnMin(episode.duration)}
              </span>
              <span className="subfix">
                <PlayCircle />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          padding: 0 2rem 3rem;
          height: 100%;
          color: var(--secondary);
          position: relative;
          overflow-y: auto;
          position: relative;
          margin-top: 5rem;
          touch-action: pan-y;
        }
        .title {
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 1rem 0;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: var(--font-md);
        }

        .episodes-list {
          padding: 0;
        }
        li {
          list-style: none;
        }
        .play-button {
          width: 100%;
          height: 100%;
          text-align: left;
          padding: 0.8rem 1rem;
          cursor: pointer;
          position: relative;
          color: var(--secondary);
        }

        .play-button:hover {
          background: var(--primary-95);
        }
        .episode-title {
          font-size: var(--font-sm);
          font-weight: bold;
          margin: 0.1rem 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 85%;
          overflow: hidden;
        }
        .episode-info {
          color: var(--primary-40);
          font-size: var(--font-xs);
          margin: 0;
        }
        .subfix {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
        }
        .play-button:hover > .subfix {
          opacity: 1;
        }

        @media screen and (min-width: 1440px) {
          .container {
            padding: 0 2.5rem 3rem;
          }
          .episode-title {
            font-size: var(--font-xs);
          }
        }
      `}</style>
    </div>
  )
}

export default Queue
