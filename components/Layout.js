import React, {useContext} from 'react'
import Head from 'next/head'
import Player from './Player';
import {PlayerContext} from '../contexts/PlayerContext'
import { AudioPlayerContainer } from './AudioPlayerContainer';


export default function Layout ({children, title}) {
  
  const {currentSong} = useContext(PlayerContext)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <div className='content'>
        {children}
      </div>

      {/* {currentSong && (
        <Player />
      )} */}

      <AudioPlayerContainer isOpen={true}/>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        body {
          margin: 0;
          background: #fff;
          font-family: 'Roboto', sans-serif;
        }
        .content {
          padding-bottom: 130px;
        }
      `}</style>
    </div>
  );
}
