import FavsProvider from 'components/FavsProvider'
import '../styles/normalize.css'
import '../styles/main.css'
import Head from 'components/common/head'
import type { AppProps } from 'next/app'
import Player from '@components/player/Player'
import { AudioPlayerProvider } from '@components/audioplayer/AudioPlayerProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavsProvider>
      <AudioPlayerProvider>
        <Head />
        <Component {...pageProps} />
        <Player />
      </AudioPlayerProvider>
    </FavsProvider>
  )
}

export default MyApp
