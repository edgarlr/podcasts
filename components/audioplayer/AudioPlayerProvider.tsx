import { useEffect, useMemo, useReducer, useRef } from 'react'
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

  useEffect(() => {
    if ('mediaSession' in navigator && current) {
      const { mediaSession }: any = window.navigator
      mediaSession.metadata = new (window as any).MediaMetadata({
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
      })
      // Clean up media session metadata
      return () => {
        mediaSession.metadata = null
      }
    }
  }, [current])

  useEffect(() => {
    const navigator: any = window.navigator

    const next = () => {
      if (currentIndex < playlist.length - 1) return nextEpisode
      return null
    }

    if ('mediaSession' in navigator && current) {
      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current.play()
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current.pause()
      })
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        replay(15)
      })

      navigator.mediaSession.setActionHandler('seekforward', () => {
        seekForward(30)
      })
      navigator.mediaSession.setActionHandler('previoustrack', prevEpisode)
      navigator.mediaSession.setActionHandler('nexttrack', next())

      return () => {
        // Clean up media session handlers
        navigator.mediaSession.setActionHandler('play', null)
        navigator.mediaSession.setActionHandler('pause', null)
        navigator.mediaSession.setActionHandler('seekbackward', null)
        navigator.mediaSession.setActionHandler('seekforward', null)
        navigator.mediaSession.setActionHandler('previoustrack', null)
        navigator.mediaSession.setActionHandler('nexttrack', null)
      }
    }
  }, [])

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

  const play = (track: TEpisode) => {
    if (!audioRef.current) return
    audioRef.current.src = track.urls.high_mp3
    audioRef.current.play()
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        e.code === 'Space' &&
        current &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLButtonElement)
      ) {
        e.preventDefault()
        toggleAudio()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggleAudio])

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
