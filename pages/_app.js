import { PlayerState } from 'lib/contexts/PlayerState'
import { FavsState } from 'lib/contexts/FavsState'
import PropTypes from 'prop-types'
import '../styles/normalize.css'
import '../styles/main.css'
import AudioLayout from 'components/AudioLayout'
import Head from 'components/common/head'

function MyApp({ Component, pageProps }) {
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

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
}
