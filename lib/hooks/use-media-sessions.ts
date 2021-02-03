import { usePlayer } from 'lib/hooks/use-player'
import { useEffect } from 'react'

export const useMediaSessions = () => {
  const {
    current,
    currentIndex,
    playlist,
    prevEpisode,
    nextEpisode,
    play,
    pause,
    seekForward,
    replay,
  } = usePlayer()

  useEffect(() => {
    const next = () => {
      if (currentIndex < playlist.length - 1) return nextEpisode
      return null
    }

    if ('mediaSession' in navigator && current) {
      const navigator: any = window.navigator

      navigator.mediaSession.metadata = new (window as any).MediaMetadata({
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
      navigator.mediaSession.setActionHandler('play', () => {
        play(current.id)
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        pause()
      })
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        replay(15)
      })

      navigator.mediaSession.setActionHandler('seekforward', () => {
        seekForward(30)
      })
      navigator.mediaSession.setActionHandler('previoustrack', prevEpisode)
      navigator.mediaSession.setActionHandler('nexttrack', next())
    }
  }, [current])
}
