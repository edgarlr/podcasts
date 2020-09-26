import Error from 'next/error';
import Homepage from 'components/screens/Homepage';
import PropTypes from 'prop-types';

export async function getServerSideProps(context) {
  try {
    const req = await fetch(
      'https://api.audioboom.com/channels/recommended?api_version=2'
    );
    const { body: channels } = await req.json();

    return { props: { channels, statusCode: context.res.statusCode } };
  } catch (error) {
    return { props: { channels: null, statusCode: context.res.statusCode } };
  }
}

export default function Home({ channels, statusCode }) {
  if (statusCode !== 200) return <Error statusCode={statusCode} />;

  return <Homepage channels={channels} />;
}

Home.propTypes = {
  channels: PropTypes.array.isRequired,
  statusCode: PropTypes.number.isRequired,
};
