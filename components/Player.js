import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from 'react-icons/md';
import TranslucentImage from 'components/TranslucentImage';
import AudioControls from 'components/AudioControls';
import { useContext } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import PlayerSkeleton from './PlayerSkeleton';
import { colors } from 'styles/theme';

export const Player = ({handleModalClick}) => {
  const {
    loading, 
    currentSong,
  } = useContext(PlayerContext)

  if (loading) return <PlayerSkeleton />

  return (
    <>
      <button onClick={() => handleModalClick()}>
        <MdKeyboardArrowDown size='2.5em' color={colors.white} />
      </button>

      <div className='container'>

        <div className='img-container'>
          <TranslucentImage
            clipUrls={currentSong.urls}
            channelUrls={currentSong.channel.urls}
          />
        </div>

        <div className='info'>
          <h3>{currentSong.title}</h3>
          <h6>{currentSong.channel.title}</h6>
        </div>

        <AudioControls clipSrc={currentSong.urls.high_mp3} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2em 2em 0;
          height: 70%;
          color: white;
          position: relative
        }
        button {
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
        h3 {
          margin: 8px 0;
          font-size: 16px;
          display: flex;
          justify-content: flex-start;
        }
        h6 {
          margin: 0;
          font-size: 12px;
          font-weight: 400;
          color: #a8a8a8;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
