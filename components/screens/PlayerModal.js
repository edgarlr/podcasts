import { useRef, useState } from 'react';
import { usePlayer } from 'lib/contexts';
import PlayerPortal from 'components/player/PlayerPortal';
import MiniPlayer from 'components/player/MiniPlayer';
import { Player } from 'components/player/Player';
import { colors } from 'styles/theme';

const PlayerModal = () => {
  const {
    currentIndex,
    playlist,
    SetIsPlaying,
    SetLoading,
    SetCurrentIndex,
    current,
  } = usePlayer();

  const [fullView, setFullView] = useState(false);
  const handleModalClick = () => setFullView(!fullView);

  const audio = useRef('audio_tag');
  const audioRef = audio.current;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAudio = () => {
    audioRef.paused ? audioRef.play() : audioRef.pause();
  };

  const setupMediaSessions = () => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: current.title,
        artist: current.channel.title,
        artwork: [
          {
            src: current.urls.image || current.channel.urls.logo_image.original,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: current.urls.image || current.channel.urls.logo_image.original,
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      });
      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.play();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.pause();
      });
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        prevEpisode();
      });
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        nextEpisode();
      });
    }
  };

  const handleProgress = (e) => {
    const compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audioRef.currentTime = compute;
  };

  const changeSong = () => {
    audioRef.pause();
    setDuration(0);
    setCurrentTime(0);
    audioRef.currentTime = 0;
    audio.current.src = current.urls.high_mp3;
  };

  const nextEpisode = () => {
    if (currentIndex !== playlist.length) {
      SetCurrentIndex(currentIndex + 1);
      changeSong();
    }
  };

  const prevEpisode = () => {
    audioRef.pause();
    if (audioRef.currentTime > 5 || currentIndex === 0) {
      audioRef.currentTime = 0;
      setDuration(0);
      setCurrentTime(0);
      audioRef.play();
    } else {
      SetCurrentIndex(currentIndex - 1);
      changeSong();
    }
  };

  return (
    <>
      <PlayerPortal selector={'#player'}>
        <div className={fullView ? 'fullmodal' : ' '}>
          {fullView ? (
            <Player
              handleModalClick={handleModalClick}
              handleProgress={handleProgress}
              toggleAudio={toggleAudio}
              currentTime={currentTime}
              nextEpisode={nextEpisode}
              prevEpisode={prevEpisode}
              duration={duration}
            />
          ) : (
            <MiniPlayer
              handleModalClick={handleModalClick}
              toggleAudio={toggleAudio}
              currentTime={currentTime}
              duration={duration}
            />
          )}
        </div>
        <audio
          onCanPlay={(e) => setDuration(e.target.duration)}
          onLoadStart={() => SetLoading(true)}
          onLoadedData={() => {
            SetLoading(false);
            audioRef.play();
          }}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onPlay={() => {
            SetIsPlaying(true);
            setupMediaSessions();
          }}
          onPlaying={() => SetIsPlaying(true)}
          onPause={() => SetIsPlaying(false)}
          onEnded={() => nextEpisode()}
          preload="true"
          ref={audio}
          src={current.urls.high_mp3}
        />
      </PlayerPortal>

      <style jsx>{`
        div {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        div {
          z-index: 20;
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
          transition: 0.2s;
        }
        .fullmodal {
          height: 95%;
        }
        div.fullmodal::after {
          content: ' ';
          position: absolute;
          top: -10%;
          left: 0;
          right: 0;
          bottom: 100%;
          z-index: -1;
          opacity: 0.9;
          background: ${colors.white};
        }
      `}</style>
    </>
  );
};

export default PlayerModal;
