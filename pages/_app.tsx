import { PlayerState } from 'lib/contexts/PlayerState'
import FavsProvider from 'components/FavsProvider'
import '../styles/normalize.css'
import '../styles/main.css'
import Head from 'components/common/head'
import type { AppProps } from 'next/app'
import Player from '@components/player/Player'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavsProvider>
      <PlayerState>
        <Head />
        <Component {...pageProps} />
        <Player />
      </PlayerState>
    </FavsProvider>
  )
}

export default MyApp
