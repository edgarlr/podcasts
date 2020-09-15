import { MdKeyboardArrowDown, MdSkipPrevious, MdPlayArrow, MdPause, MdSkipNext } from 'react-icons/md';
import TranslucentImage from 'components/TranslucentImage';
import { useContext } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import PlayerSkeleton from './PlayerSkeleton';
import { colors } from 'styles/theme';
import { durationToMSS } from 'utils/durationToMSS';

export const Player = ({handleModalClick, handleProgress, currentTime, toggleAudio, audioRef, duration}) => {
  const {
    loading, 
    currentSong,
    currentIndex,
    playlist,
    prevSong,
    nextSong
  } = useContext(PlayerContext)

  if (loading) return <PlayerSkeleton />

  return (
    <>
      <button className='nav-button' onClick={() => handleModalClick()}>
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

        <div className='main-player'>
          <button
            disabled={currentIndex === 0 ? true : false}
            className='controller-button'
            onClick={() => prevSong()}
          >
            <MdSkipPrevious color='white' size='3em' />
          </button>
          <button
            className='play-button'
            onClick={() => toggleAudio()} 
          >
            {audioRef.current.paused ? ( 
              <MdPlayArrow color='white' size='3em' />
              ) : ( 
              <MdPause color='white' size='3em' />
            )}
          </button>
          <button
            disabled={currentIndex === playlist.length - 1 ? true : false}
            className='controller-button'
            onClick={()=> nextSong()}
          >
            <MdSkipNext color='white' size='3em' />
          </button>
        </div>

        <input
          onChange={handleProgress} 
          value={duration ? (currentTime * 100) / duration : 0} 
          type='range'
          name='progressbar'
          id='pgrbar'
          className='slider'
        />

        <div className='progress-time'>
          <div>{durationToMSS(currentTime)}</div>
          <div>{durationToMSS(duration)}</div>
        </div>

      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2em 2em 0;
          height: 70%;
          color: white;
          position: relative;
        }
        .nav-button {
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
        button {
          outline: none;
        }
        button[disabled] {
          opacity: 0.3;
        }

        .slider {
          -webkit-appearance: none;
          height: 4px;
          background-color: #5e5f5f;
          width: 100%;
          outline: none;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          margin-bottom: 1rem;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-progress-appearance: none;
          width: 2.5em;
          height: 2.5em;
          border-radius: 50%;
          border: 4px solid #131414;
          cursor: pointer;

          background: #fff;
        }

        .slider::-webkit-slider-runnable-track {
          -webkit-appearance: none;
        }

        .main-player {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10%;
        }
        .controller-button {
          background: none;
          border: none;
        }
        .play-button {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid white;
          background: none;
        }
        .play-button:focus {
          outline: none;
        }
        .progress-time {
          display: flex;
          justify-content: space-between;
          color: #979797;
          font-size: 12px;
        }
      `}</style>
    </>
  );
}
