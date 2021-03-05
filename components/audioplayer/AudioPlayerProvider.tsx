import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import {
  PlayerState,
  PlayerContext,
  PlayerReducer,
  PlayerControlsContext,
  PlayerCurrentTimeContext,
} from '@lib/hooks/use-player'
import AudioElement from './AudioElement'

export const AudioPlayerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [audioRef, setAudioRef] = useState<HTMLAudioElement>(null)

  const [currentTime, setCurrentTime] = useState(0)

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

  const toggleAudio = useCallback(() => {
    if (!audioRef) return
    audioRef.paused ? audioRef.play() : audioRef.pause()
  }, [audioRef])

  const play = (track: TEpisode) => {
    if (!audioRef) return
    audioRef.src = track.urls.high_mp3
    audioRef.play()
  }

  const nextEpisode = useCallback(() => {
    if (currentIndex >= playlist.length - 1) return null
    audioRef.pause()
    audioRef.currentTime = 0
    setCurrentIndex(currentIndex + 1)
    audioRef.src = playlist[currentIndex + 1].urls.high_mp3
    audioRef.play()
  }, [audioRef, currentIndex, playlist])

  const prevEpisode = useCallback(() => {
    if (!audioRef) return
    audioRef.pause()
    if (audioRef.currentTime > 5 || currentIndex === 0) {
      audioRef.currentTime = 0
      audioRef.play()
    } else {
      audioRef.currentTime = 0
      setCurrentIndex(currentIndex - 1)
      audioRef.src = playlist[currentIndex - 1].urls.high_mp3
      audioRef.play()
    }
  }, [audioRef, currentIndex, playlist])

  const seekForward = useCallback(
    (time: number) => {
      if (!audioRef) return
      audioRef.currentTime = audioRef.currentTime + time
    },
    [audioRef]
  )

  const replay = useCallback(
    (time: number) => {
      if (!audioRef) return
      audioRef.currentTime = audioRef.currentTime - time
    },
    [audioRef]
  )

  const updateTime = (time: number) => {
    if (!audioRef) return
    audioRef.currentTime = time
  }

  useEffect(() => {
    if ('mediaSession' in navigator && current) {
      const { mediaSession }: any = navigator
      mediaSession.metadata = new (window as any).MediaMetadata({
        title: current.title,
        artist: current.channel.title,
        album: current.channel.title,
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
    if ('mediaSession' in navigator) {
      const next = currentIndex < playlist.length - 1 ? nextEpisode : null
      const { mediaSession }: any = navigator
      mediaSession.setActionHandler('previoustrack', prevEpisode)
      mediaSession.setActionHandler('nexttrack', next)

      return () => {
        // Clean up media session handlers
        mediaSession.setActionHandler('previoustrack', null)
        mediaSession.setActionHandler('nexttrack', null)
      }
    }
  }, [currentIndex, playlist, nextEpisode, prevEpisode])

  useEffect(() => {
    if ('mediaSession' in navigator) {
      const { mediaSession }: any = navigator
      mediaSession.setActionHandler('play', () => {
        audioRef.play()
      })
      mediaSession.setActionHandler('pause', () => {
        audioRef.pause()
      })
      mediaSession.setActionHandler('seekbackward', () => {
        replay(15)
      })

      mediaSession.setActionHandler('seekforward', () => {
        seekForward(30)
      })

      return () => {
        // Clean up media session handlers
        mediaSession.setActionHandler('play', null)
        mediaSession.setActionHandler('pause', null)
        mediaSession.setActionHandler('seekbackward', null)
        mediaSession.setActionHandler('seekforward', null)
      }
    }
  }, [audioRef, seekForward, replay])

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
  }, [toggleAudio, current])

  const playerValue = useMemo(
    () => ({
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
      audioRef,
      setAudioRef,
    }),
    [audioRef, current, currentIndex, playlist, loading, isPlaying, duration]
  )

  return (
    <PlayerContext.Provider value={playerValue}>
      <PlayerControlsContext.Provider
        value={{
          prevEpisode,
          nextEpisode,
          toggleAudio,
          play,
          seekForward,
          replay,
          updateTime,
        }}
      >
        <PlayerCurrentTimeContext.Provider
          value={{ currentTime, setCurrentTime }}
        >
          {children}
          <AudioElement />
        </PlayerCurrentTimeContext.Provider>
      </PlayerControlsContext.Provider>
    </PlayerContext.Provider>
  )
}
