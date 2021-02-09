import PlayCircle from 'components/icons/PlayCircle'
import { usePlayer } from 'lib/hooks/use-player'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import { useRouter } from 'next/router'
import React from 'react'
import MiniPlayer from './MiniPlayer'

const Queue = () => {
  const { playlist, currentIndex, current, play } = usePlayer()

  const router = useRouter()

  const onNowPlayingClick = (id: TEpisode['id']) => {
    router.push(`/episodes/${id}`)
  }

  return (
    <div className="container">
      <h4 className="title">Now Playing</h4>
      <MiniPlayer
        onClick={() => onNowPlayingClick(current.id)}
        style={{ margin: '1rem 0', height: '5.25rem' }}
      />

      <h4 className="title">Next from: {current.channel.title}</h4>

      <ul className="episodes-list">
        {playlist.slice(currentIndex + 1).map((episode: TEpisode) => (
          <li onClick={() => play(episode)} key={episode.id}>
            <p className="episode-title">{episode.title}</p>
            <span className="episode-info">
              {getFormattedDate(episode.uploaded_at)}
              <b> · </b>
              {getDurationOnMin(episode.duration)}
            </span>
            <div className="play-icon">
              <PlayCircle />
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          padding: 0 2rem 3rem;
          height: 100%;
          color: white;
          position: relative;
          overflow-y: scroll;
          position: relative;
          margin-top: 5rem;
        }

        .title {
          color: white;
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 1rem 0;
          font-weight: bold;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 0.95rem;
          position: relative;
        }

        .episodes-list {
          padding: 0;
        }
        li {
          list-style: none;
          padding: 0.8rem 1rem;
          cursor: pointer;
          position: relative;
        }
        li:hover {
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

        .play-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
        }

        li:hover > .play-icon {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default Queue
