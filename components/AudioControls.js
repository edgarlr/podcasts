import React, { useContext, useRef, useState, useEffect } from 'react'
import { MdPause, MdPlayArrow, MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import {PlayerContext} from 'contexts/PlayerContext'

export default function AudioControls({clipSrc}) {
  const {
    playing,
    togglePlaying,
    currentSong,
    prevSong,
    nextSong,
    playlist,
    currentSongIndex
  } = useContext(PlayerContext)

  const audio = useRef('audio_tag')
  const [stateVolume, setStateVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleProgress = e => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;   
  }

  // useEffect(() => {
  //   audio.current.volume = stateVolume
  //   if (playing) {
  //     toggleAudio();
  //   }
  //   console.log(playlist[currentSongIndex + 1 ]);
    
 
  // }, [])

  return (
    <div className='player'>
      <audio
        onCanPlay={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        preload='true'
        ref={audio}
        autoPlay
      >
        <source
          preload='true'
          src={currentSong.urls.high_mp3 || clipSrc}
          type='audio/mpeg'
        />
      </audio>

      <div className='main-player'>
        <button
          disabled={currentSongIndex === 0 ? true : false}
          className='controller-button'
          onClick={() => prevSong()}
        >
          <MdSkipPrevious color='white' size='3em' />
        </button>
        <button
          className='play-button'
          onClick={() => {
            toggleAudio();
            togglePlaying();
          }}
        >
          {playing ? (
            <MdPause color='white' size='3em' />
          ) : (
            <MdPlayArrow color='white' size='3em' />
          )}
        </button>
        <button
          disabled={currentSongIndex === playlist.length - 1 ? true : false}
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
      {/* <div className='control-bar'>
        <div className='progress-bar'>
          <div className='payback-controller' />
        </div>
      </div> */}

      <div className='progress-time'>
        <div>{fmtMSS(currentTime)}</div>
        <div>{fmtMSS(duration)}</div>
      </div>

      <style jsx>{`
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

        .player {
          height: auto;
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
        .control-bar {
          height: 4px;
          background: #5e5f5f;
          width: 100%;
          position: relative;
          margin: 16px 0;
        }
        .progress-bar {
          position: absolute;
          height: 4px;
          background: #ffffff;
          left: 0;
          right: 20%;
        }
        .payback-controller {
          position: absolute;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          border: 4px solid #131414;
          right: 0;
          top: 0;
          background: #fff;
          margin: -12px -12px;
        }
        .progress-time {
          display: flex;
          justify-content: space-between;
          color: #979797;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}
