import { MdVolumeUp } from 'react-icons/md'
import { colors } from 'styles/theme'
import { durationToMinutes } from 'utils/durationToMinutes'

const EpisodeCard = ({clip, isActive, handlePodcastClick}) => {
  return (
    <div
      className={'episode ' + (isActive ? 'active' : '')}
      onClick={() => handlePodcastClick(clip, clip.channel.id)}
    >
      <h2>{clip.title}</h2>
      <div className='meta'>{durationToMinutes(clip.duration)}</div>
      <p>{clip.counts.plays} plays</p>
      
      {isActive  && (
        <span>
          <MdVolumeUp size='2em' color='white' />
        </span>
      )}

      <style jsx>{`
        .episode {
          border-bottom: 1px solid ${colors.lightGray};
        }
        .active {
          background: ${colors.black};
          color: ${colors.white};
        }
        .episode:hover {
          color: ${colors.black};
        }
        .episode .meta {
          color: ${colors.textLightGray};
        }
        p {
          color: ${colors.textLightGray};
        }
      `}</style>

      <style jsx>{`
        .episode {
          display: block;
          text-decoration: none;
          margin: 0 0.6em;
          padding: 16px 0;
          cursor: pointer;
        }
        .active {
          margin: 0 -.5rem;
          padding: 16px 1.3em;
          border-bottom: none;
          border-radius: 20px;
          position: relative;
          text-align: left;
        }
        h2 {
          margin: 16px 0;
          font-size: 16px;
        }
        .active h2,
        .active p {
          width: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .active span {
          position: absolute;
          right: 1.3rem;
          top: 50%;
          transform: translateY(-50%);
        }
        .episode .meta {
          font-size: 12px;
          margin-bottom: 8px;
        }
        p {
          font-size: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default EpisodeCard
