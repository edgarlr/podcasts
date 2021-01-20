import { PlayerState } from 'lib/contexts/PlayerState'
import { FavsState } from 'lib/contexts/FavsState'
import '../styles/normalize.css'
import '../styles/main.css'
import AudioLayout from 'components/AudioLayout'
import Head from 'components/common/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerState>
      <FavsState>
        <AudioLayout>
          <Head />
          <Component {...pageProps} />
        </AudioLayout>
      </FavsState>
    </PlayerState>
  )
}

export default MyApp
