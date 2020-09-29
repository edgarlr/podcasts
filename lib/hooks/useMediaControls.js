import { usePlayer } from 'lib/contexts';

export const useMediaControls = () => {
  const { currentIndex, playlist, SetCurrentIndex, audioRef } = usePlayer();

  const audio = audioRef.current;

  const changeSong = () => {
    audio.pause();
    audio.currentTime = 0;
    audio.src = playlist[currentIndex + 1].urls.high_mp3;
    audio.play();
  };

  const nextEpisode = () => {
    if (currentIndex < playlist.length + 1) {
      changeSong();
      SetCurrentIndex(currentIndex + 1);
    }
  };

  const prevEpisode = () => {
    audio.pause();
    if (audio.currentTime > 5 || currentIndex === 0) {
      audio.currentTime = 0;
      audio.play();
    } else {
      changeSong();
      SetCurrentIndex(currentIndex - 1);
    }
  };

  const toggleAudio = () => {
    audio.paused ? audio.play() : audio.pause();
  };

  return {
    prevEpisode,
    nextEpisode,
    toggleAudio,
  };
};
