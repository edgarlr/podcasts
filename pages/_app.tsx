import FavsProvider from 'components/FavsProvider'
import '../styles/normalize.css'
import '../styles/main.css'
import Head from 'components/common/head'
import type { AppProps } from 'next/app'
import Player from '@components/player/Player'
import { AudioPlayerProvider } from '@components/audioplayer/AudioPlayerProvider'
import ToastProvider from '@components/ui/Toast/ToastProvider'

function MyApp({ Component, pageProps }: AppProps) {
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
