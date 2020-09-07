import React, {useContext} from 'react'
import Head from 'next/head'
import Player from 'components/Player';
import {PlayerContext} from 'contexts/PlayerContext'
import { AudioPlayerContainer } from 'components/AudioPlayerContainer';
import { colors } from 'styles/theme';
import AppHeader from './AppHeader';

export default function Layout ({
  children, 
  headerText = null, 
  button = null, 
  navigation = null }) {

  const {currentSong} = useContext(PlayerContext)
  
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppHeader navigation={navigation} headerText={headerText} button={button} />

      <main className='content'>
        {children}
      </main>

      {/* {currentSong && (
        <Player />
      )} */}

      <AudioPlayerContainer isOpen={true}/>

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
          margin: 0;
          font-family: 'Kumbh Sans', sans-serif;
        }
        main {
          padding: 2rem 1.5rem 130px;
        }
      `}</style>
    </>
  );
}
