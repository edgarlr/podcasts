import { useContext } from 'react';
import {MdPause} from 'react-icons/md'
import TranslucentImage from './TranslucentImage';
import {PlayerContext} from '../contexts/PlayerContext'
import MiniPlayerSkeleton from './MiniPlayerSkeleton';
import { colors, fontWeight } from 'styles/theme';

export default function MiniPlayer() {
  const { currentSong, loading } = useContext(PlayerContext);

  if (loading) return <MiniPlayerSkeleton />

  return (
    <>
      <div className='info-container'>
        <div className='img-container'>
          <TranslucentImage
            clipUrls={currentSong.urls}
            channelUrls={currentSong.channel.urls}
          />
        </div>

        <div className='info'>
          <h3>{currentSong.title}</h3>
          <h4>{currentSong.channel.title}</h4>
        </div>

        <MdPause size='2em' color='white' />
      </div>
      
      <style jsx>{`
        h3 {
          color: ${colors.white};
        }
        h4 {
          color: ${colors.gray};
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        .info-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .img-container {
          width: 3.5em;
        }
        .info {
          position: absolute;
          left: 5.5rem;
        }
        .info h3,
        .info h4 {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h3 {
          font-size: .9rem;
          margin: 0 0 4px;
        }
        h4 {
          font-size: 0.7rem;
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
