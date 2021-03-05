import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import FavsProvider from 'components/FavsProvider'
import Head from 'components/common/head'
import Player from '@components/player/Player'
import { AudioPlayerProvider } from '@components/audioplayer/AudioPlayerProvider'
import ToastProvider from '@components/ui/Toast/ToastProvider'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <FavsProvider>
      <AudioPlayerProvider>
        <ToastProvider>
          <Head />
          <Component {...pageProps} />
          <Player />
        </ToastProvider>
      </AudioPlayerProvider>
    </FavsProvider>
  )
}

export default MyApp
