import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import TranslucentImage from './TranslucentImage';
import AudioControls from './AudioControls';
import { useEffect, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

export const AudioPlayer = () => {
  const {
    loading, 
    currentSongIndex,
    SetLoading,
    SetCurrent,
    currentSong,
    playlist
  } = useContext(PlayerContext)

  // useEffect(() => {
  //   if (playlist !== null) {
  //     const updateContextState = async () => {
  //       SetLoading(true);
  //       for (let i = 0; i < playlist.length; i++) {
  //         if (currentSongIndex == i) {
  //           await SetCurrent(playlist[i]);
  //           SetLoading(false);
  //         }
  //       }
  //     };
  //     // updateContextState();
  //   }
  // }, [])

  return (
    <div>
      <div className='modal'>
        <div className='clip'>
          <nav>
            <Link
              // href={`/[channel]?id=${currentSong.channel.id}`}
              // as={`/${currentSong.channel.id}`}
              href={'#'}
            >
              <a>
                <MdKeyboardArrowLeft size='24px' />
              </a>
            </Link>
          </nav>

          <div className='img-container'>
            <TranslucentImage
              clipUrls={currentSong.urls}
              channelUrls={currentSong.channel.urls}
            />
          </div>

          <div className='info'>
            <h3>{currentSong.title}</h3>
            <h6>{currentSong.channel.title}</h6>
          </div>

          <AudioControls clipSrc={currentSong.urls.high_mp3} />
        </div>
      </div>

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto;
          z-index: 99999;
          background: #131414;
        }
        .clip {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2em 2em;
          height: 85%;
          min-height: 600px;
          max-height: 750px;
          top: 0;
          color: white;
        }
        nav {
          padding: 0;
          background: none;
        }
        nav a {
          color: white;
          cursor: pointer;
        }
        .img-container {
          width: 80%;
          max-width: 250px;
          margin: 0 auto;
          position: relative;
        }
        .info {
          width: 90%;
          margin: 1em auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
        h3 {
          margin: 8px 0;
          font-size: 16px;
        }
        h6 {
          margin: 0;
          font-size: 12px;
          font-weight: 400;
          color: #a8a8a8;
          text-transform: uppercase;
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        body {
          margin: 0;
          background: #fff;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}
