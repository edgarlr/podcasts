import { usePlayer } from 'lib/contexts'
import { useEffect } from 'react'
import { useMediaControls } from 'lib/hooks'

export const useMediaSessions = () => {
  const { current, audioRef, currentIndex, playlist } = usePlayer()
  const { prevEpisode, nextEpisode } = useMediaControls()

  const audio = audioRef.current

  useEffect(() => {
    const next = () => {
      if (currentIndex < playlist.length - 1) return nextEpisode
      return null
    }

    if ('mediaSession' in navigator && current) {
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
      })
      navigator.mediaSession.setActionHandler('play', () => {
        audio.play()
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        audio.pause()
      })
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        audio.currentTime = audio.currentTime - 15
      })

      navigator.mediaSession.setActionHandler('seekforward', () => {
        audio.currentTime = audio.currentTime + 30
      })
      navigator.mediaSession.setActionHandler('previoustrack', prevEpisode)
      navigator.mediaSession.setActionHandler('nexttrack', next())
    }
  }, [current, audioRef])
}
