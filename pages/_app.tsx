import { PlayerState } from 'lib/contexts/PlayerState'
import { FavsState } from 'lib/contexts/FavsState'
import '../styles/normalize.css'
import '../styles/main.css'
import Head from 'components/common/head'
import type { AppProps } from 'next/app'
import Player from '@components/player/Player'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerState>
      <FavsState>
        <Head />
        <Component {...pageProps} />
        <Player />
      </FavsState>
    </PlayerState>
  )
}

export default MyApp
