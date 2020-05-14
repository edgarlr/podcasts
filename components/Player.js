import {MdPause} from 'react-icons/md'
import TranslucentImage from './TranslucentImage';
export default function Player() {
  return (
    <div>
      <div className='player'>
        <div className='info-container'>
          <div className='img-container'>
            {/* <TranslucentImage
              clipUrls={clip.urls}
              channelUrls={clip.channel.urls}
            /> */}
            <img src='https://images.theabcdn.com/i/21285758' alt='' srcset='' />
            <div
              className='banner-shadow'
              style={{
                backgroundImage: `url(https://images.theabcdn.com/i/21285758})`,
              }}
            />
          </div>
          <div className='info'>
            <h3>Teaser: Juro que es Posta</h3>
            <h4>Posta</h4>
          </div>
        </div>
        <MdPause size='2em' color='white' />
      </div>

      <style jsx>{`
        .info-container {
          display: flex;
          align-items: center;
        }
        .player {
          background: #131414;
          position: fixed;
          height: 6em;
          right: 0;
          left: 0;
          bottom: 0;
          border-radius: 20px 20px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 .8em;
        }
        .info {
          margin-left: 1em;
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
          font-size: .85em;
          font-weight: bold;
          margin: 0 0 4px;
        }
        h4 {
          color: #a8a8a8;
          font-size: .7em;
          font-weight: 400;
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
