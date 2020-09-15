import React, {useContext} from 'react'
import Head from 'next/head'
import {PlayerContext} from 'contexts/PlayerContext'
import { colors } from 'styles/theme';
import AppHeader from './AppHeader';
import PlayerModal from 'containers/PlayerModal';

export default function Layout ({
  children, 
  headerText = null, 
  button = null, 
  navigation = null }) {

  const { currentSong } = useContext(PlayerContext)
  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppHeader navigation={navigation} headerText={headerText} button={button} />

      <main className='content'>
        {children}
      </main>

      {currentSong && (
        <PlayerModal />
      )}

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
