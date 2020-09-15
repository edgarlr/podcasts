import { useContext } from 'react';
import {MdPause} from 'react-icons/md'
import TranslucentImage from './TranslucentImage';
import {PlayerContext} from '../contexts/PlayerContext'
import MiniPlayerSkeleton from './MiniPlayerSkeleton';
import { colors, fontWeight } from 'styles/theme';

export default function MiniPlayer({handleModalClick}) {
  const { currentSong, loading } = useContext(PlayerContext);

  if (loading) return <MiniPlayerSkeleton />

  return (
    <>
      <div className='container' onClick={() => handleModalClick()}>
        <button />
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
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        button {
          outline: none;
          border: none;
          height: 6px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
        }
        .img-container {
          width: 3.5em;
        }
        .info {
          position: absolute;
          left: 5.5rem;
          max-width: 55%;
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
