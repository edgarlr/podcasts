import { useReducer, useRef } from 'react'
import {
  PlayerState,
  PlayerContext,
  PlayerReducer,
} from '@lib/hooks/use-player'
import AudioElement from './AudioElement'

export const AudioPlayerProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const initialPlayerState: PlayerState = {
    currentIndex: null,
    current: null,
    playlist: [],
    loading: true,
    isPlaying: false,
    duration: 0,
  }

  const [
    { currentIndex, current, playlist, loading, isPlaying, duration },
    dispatch,
  ] = useReducer(PlayerReducer, initialPlayerState)

  const setCurrentIndex = (index: PlayerState['currentIndex']) =>
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })

  const setPlaylist = (playlist: PlayerState['playlist']) =>
    dispatch({ type: 'SET_PLAYLIST', payload: playlist })

  const setLoading = (loading: PlayerState['loading']) =>
    dispatch({ type: 'SET_LOADING', payload: loading })

  const setIsPlaying = (isPlaying: PlayerState['isPlaying']) =>
    dispatch({ type: 'SET_IS_PLAYING', payload: isPlaying })

  const setDuration = (duration: PlayerState['duration']) =>
    dispatch({ type: 'SET_DURATION', payload: duration })

  const changeSong = () => {
    if (!audioRef.current) return
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0
    audio.src = playlist[currentIndex + 1].urls.high_mp3
    audio.play()
  }

  const nextEpisode = () => {
    if (currentIndex < playlist.length + 1) {
      changeSong()
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevEpisode = () => {
    if (!audioRef.current) return
    const audio = audioRef.current
    audio.pause()
    if (audio.currentTime > 5 || currentIndex === 0) {
      audio.currentTime = 0
      audio.play()
    } else {
      changeSong()
      setCurrentIndex(currentIndex - 1)
    }
  }

  const toggleAudio = () => {
    if (!audioRef.current) return
    const audio = audioRef.current
    audio.paused ? audio.play() : audio.pause()
  }

  const play = (trackId: TEpisode['id']) => {
    if (!audioRef.current) return
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === trackId) {
        setCurrentIndex(i)
        audioRef.current.src = playlist[i].urls.high_mp3
        audioRef.current.play()
        break
      }
    }
  }
  const pause = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
  }

  const seekForward = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = audioRef.current.currentTime + time
  }

  const replay = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = audioRef.current.currentTime - time
  }

  const updateTime = (time: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = time
  }

  return (
    <PlayerContext.Provider
      value={{
        currentIndex,
        current,
        playlist,
        loading,
        isPlaying,
        duration,
        setCurrentIndex,
        setPlaylist,
        setLoading,
        setIsPlaying,
        setDuration,
        prevEpisode,
        nextEpisode,
        toggleAudio,
        play,
        pause,
        seekForward,
        replay,
        updateTime,
      }}
    >
      {children}
      <AudioElement forwadedRef={audioRef} />
    </PlayerContext.Provider>
  )
}
