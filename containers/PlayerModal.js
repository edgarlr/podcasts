import PlayerPortal from "components/PlayerPortal"
import { colors } from "styles/theme"
import MiniPlayer from "components/MiniPlayer"
import { Player } from "components/Player"
import { useContext, useRef, useState } from 'react'
import {PlayerContext} from 'contexts/PlayerContext'

const PlayerModal = () => {
  const [fullView, setFullView] = useState(false)

  const handleModalClick = () => {
    setFullView(!fullView)
  }
  const { currentSong } = useContext(PlayerContext)

  const audio = useRef('audio_tag')
  
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleProgress = e => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;   
  }

  return (
    <>
      <PlayerPortal selector={'#player'} >
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

        <div className={fullView ? 'fullmodal' : ' '}>
          {fullView && (
            <Player 
              handleModalClick={handleModalClick}
              handleProgress={handleProgress}
              toggleAudio={toggleAudio}
              currentTime={currentTime}
              audioRef={audio}
              duration={duration}
            />
          )}
          {!fullView && (
            <MiniPlayer 
              handleModalClick={handleModalClick}
              toggleAudio={toggleAudio}
              currentTime={currentTime}
              audioRef={audio}
              duration={duration}
            />
          )}
        </div>
      </PlayerPortal>

      <style jsx>{`
        div {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        div {
          z-index: 2;
          position: fixed;
          height: 6em;
          right: 0;
          left: 0;
          bottom: 0;
          margin: 0 -1px -1px -1px;
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 1em;
          transition: .2s;
        }
        .fullmodal {
          height: 94vh;
        }
      `}</style>
    </>
  )
}

export default PlayerModal
