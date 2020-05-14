import 'isomorphic-fetch';
import Link from 'next/link';
import AudioControls from '../../components/AudioControls';
import {MdKeyboardArrowDown} from 'react-icons/md'
import TranslucentImage from '../../components/TranslucentImage';

export async function getServerSideProps(context) {
  let idPodcast = context.query.podcast;

  let req = await fetch(
    `https://api.audioboom.com/audio_clips/${idPodcast}.mp3?version=2`
  );

  let data = await req.json();
  let clip = data.body.audio_clip;

  return { props: { clip } };
}

export default function podcast({ clip }) {
  return (
    <div>
      <div className='modal'>
        <div className='clip'>
          <nav>
            <Link
              href={`/[channel]?id=${clip.channel.id}`}
              as={`/${clip.channel.id}`}
            >
              <MdKeyboardArrowDown size='24px' />
            </Link>
          </nav>

          <div className='img-container'>
            <TranslucentImage
              clipUrls={clip.urls}
              channelUrls={clip.channel.urls}
            />
          </div>

          <div className='info'>
            <h3>{clip.title}</h3>
            <h6>{clip.channel.title}</h6>
          </div>

          <AudioControls clipSrc={clip.urls.high_mp3} />
        </div>

        {/* <div className='clip'>
        </div> */}
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
