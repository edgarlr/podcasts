import Homepage from 'components/screens/Homepage'
import PropTypes from 'prop-types'
import { channelShortPropType } from 'lib/customPropTypes'
import { CHANNELS_URL } from 'lib/constants'

export async function getStaticProps() {
  const req = await fetch(CHANNELS_URL)

  const { body: channels } = await req.json()

  return { props: { channels } }
}

export default function Home({ channels }) {
  return <Homepage channels={channels} />
}

Home.propTypes = {
  channels: PropTypes.arrayOf(channelShortPropType).isRequired,
}
