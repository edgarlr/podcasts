import { useContext, useEffect } from 'react';
import {MdPause} from 'react-icons/md'
import TranslucentImage from './TranslucentImage';
import {PlayerContext} from '../contexts/PlayerContext'

export default function Player() {
  const { currentSong } = useContext(PlayerContext);
  return (
    <div>
      <div className='player'>
        <div className='info-container'>
          <div className='img-container'>
            {/* <TranslucentImage
              clipUrls={clip.urls}
              channelUrls={clip.channel.urls}
            /> */}
            <TranslucentImage
              clipUrls={currentSong.urls}
              channelUrls={currentSong.channel.urls}
            />
            {/* <img
              src='https://images.theabcdn.com/i/21285758'
              alt=''
              srcSet=''
            />
            <div
              className='banner-shadow'
              style={{
                backgroundImage: `url(https://images.theabcdn.com/i/21285758})`,
              }}
            /> */}
          </div>
          <div className='info'>
            <h3>{currentSong.title}</h3>
            <h4>{currentSong.channel.title}</h4>
          </div>
        </div>
        <MdPause size='2em' color='white' />
      </div>

      <style jsx>{`
        .info-container {
          display: flex;
          align-items: center;
          position: relative;
        }
        .player {
          background: #131414;
          position: fixed;
          height: 6em;
          right: 0;
          left: 0;
          bottom: 0;
          margin: 0 -1px -1px -1px;
          border-radius: 20px 20px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8em;
        }
        .info {
          margin-left: 1em;
          position: relative;
        }
        .info h3,
        .info h4 {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .img-container {
          width: 3.5em;
          height: 3.5em;
          position: relative;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
        .banner-shadow {
          position: absolute;
          top: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          filter: blur(20px);
          z-index: -1;
          opacity: 0.5;
        }
        h3 {
          color: #fff;
          font-size: 0.85em;
          font-weight: bold;
          margin: 0 0 4px;
        }
        h4 {
          color: #a8a8a8;
          font-size: 0.7em;
          font-weight: 400;
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
