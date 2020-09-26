import { PlayerState } from 'lib/contexts/PlayerState';
import { FavsState } from 'lib/contexts/FavsState';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerState>
      <FavsState>
        <Component {...pageProps} />
      </FavsState>
    </PlayerState>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};
