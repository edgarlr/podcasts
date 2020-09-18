import Head from 'next/head'
import { usePlayer } from 'contexts'
import { colors } from 'styles/theme';
import AppHeader from './AppHeader';
import PlayerModal from 'containers/PlayerModal';

export default function Layout ({
  children, 
  headerText = null, 
  button = null, 
  navigation = null,
  pageTitle = 'Podcast' }) {

  const { isPlaying, currentIndex, playlist } = usePlayer()

  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>
          {isPlaying 
            ? `${playlist[currentIndex].title} | ${playlist[currentIndex].channel.title}` 
            : pageTitle}
          </title>
      </Head>

      <AppHeader navigation={navigation} headerText={headerText} button={button} />

      <main className='content'>
        {children}
      </main>

      {currentIndex !== null && <PlayerModal />}

      <style jsx global>{`
        body {
          background:${colors.white};
          color: ${colors.darkGray};
        }
        a {
          color: ${colors.darkGray};
        }
      `}</style>

      <style jsx global>{`
        body {
          font-family: 'Kumbh Sans', sans-serif;
          margin: 0;
        }
        main {
          padding: 2rem 1.5rem 7rem;
        }
      `}</style>
    </>
  );
}
