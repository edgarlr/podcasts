import { useRef, useState, useEffect } from 'react'
import { usePlayer } from 'contexts'
import PlayerPortal from "components/player/PlayerPortal"
import MiniPlayer from "components/player/MiniPlayer"
import { Player } from "components/player/Player"
import { colors } from "styles/theme"

const PlayerModal = () => {
  const [fullView, setFullView] = useState(false)

  const handleModalClick = () => {
    setFullView(!fullView)
  }
  const { 
    currentIndex, 
    nextSong, 
    prevSong,
    playlist,
    SetLoading
  } = usePlayer()

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
  const handleChangeSong = (type) => {
    audio.current.pause()
    if(type === 'prev') {
      prevSong()
    } else {
      nextSong()
    }
  }

  useEffect(() => {
    setDuration(0)
    setCurrentTime(0)
    SetLoading(false)
  }, [currentIndex])

  return (
    <>
      <PlayerPortal selector={'#player'} >
        <audio
          onCanPlay={(e) => {setDuration(e.target.duration)}}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onEnded={() => nextSong()}
          preload='true'
          ref={audio}
          autoPlay
        >
          <source
            preload='true'
            // src={currentIndex.urls.high_mp3 || clipSrc}
            src={playlist[currentIndex].urls.high_mp3}
            type='audio/mpeg'
          />
        </audio>

        <div className={fullView ? 'fullmodal' : ' '}>
          {fullView && (
            <Player
              currentPodcast={playlist[currentIndex]} 
              handleModalClick={handleModalClick}
              handleProgress={handleProgress}
              toggleAudio={toggleAudio}
              currentTime={currentTime}
              handleChangeSong={handleChangeSong}
              audioRef={audio}
              duration={duration}
            />
          )}
          {!fullView && (
            <MiniPlayer
              currentPodcast={playlist[currentIndex]} 
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
