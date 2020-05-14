import React, {useContext} from 'react'
import Head from 'next/head'
import Player from './Player';
import {PlayerContext} from '../contexts/PlayerContext'


export default function Layout ({children, title}) {
  
  const {audio} = useContext(PlayerContext)
  console.log(audio);
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

      {audio && (
        <Player />
      )}

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
