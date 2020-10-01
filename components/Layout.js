import Head from 'next/head';
import { usePlayer } from 'lib/contexts';
import { colors } from 'styles/theme';
import AppHeader from './AppHeader';
import PropTypes from 'prop-types';

export default function Layout(props) {
  const { children, headerText, button, navigation, pageTitle } = props;

  const { isPlaying, current } = usePlayer();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          {isPlaying
            ? `${current.title} | ${current.channel.title}`
            : pageTitle}
        </title>
      </Head>

      <AppHeader
        navigation={navigation}
        headerText={headerText}
        button={button}
      />

      <main className="content">{children}</main>

      <style jsx global>{`
        body {
          background: ${colors.white};
          color: ${colors.darkGray};
        }
        a {
          color: ${colors.darkGray};
        }
      `}</style>
    </>
  );
}

Layout.defaultProps = {
  headerText: null,
  button: null,
  navigation: false,
  pageTitle: 'Podcast',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerText: PropTypes.string.isRequired,
  button: PropTypes.element,
  navigation: PropTypes.bool,
  pageTitle: PropTypes.string,
};
