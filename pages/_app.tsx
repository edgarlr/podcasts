import { useEffect } from 'react'
import type { AppProps as NextAppProps } from 'next/app'
import FavsProvider from 'components/FavsProvider'
import Head from 'components/common/head'
import Player from '@components/player/Player'
import { AudioPlayerProvider } from '@components/audioplayer/AudioPlayerProvider'
import ToastProvider from '@components/ui/Toast/ToastProvider'
import '../styles/main.css'
import { init } from '@lib/sentry'

init()

type AppProps = NextAppProps & {
  err: Error
}

function MyApp({ Component, pageProps, err }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <FavsProvider>
      <AudioPlayerProvider>
        <ToastProvider>
          <Head />
          <Component {...pageProps} err={err} />
          <Player />
        </ToastProvider>
      </AudioPlayerProvider>
    </FavsProvider>
  )
}

export default MyApp
