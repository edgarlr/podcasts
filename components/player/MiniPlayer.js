import { usePlayer } from 'contexts'
import {MdPause, MdPlayArrow} from 'react-icons/md'
import TranslucentImage from '../TranslucentImage';
import MiniPlayerSkeleton from './MiniPlayerSkeleton';
import { colors, fontWeight } from 'styles/theme';
import CircleProgressBar from './CircleProgressBar';
import { PodcastTitle } from './PodcastTitle';

export default function MiniPlayer({
  currentPodcast, 
  handleModalClick, 
  toggleAudio, 
  duration, 
  currentTime
}) {
  
  const { loading, isPlaying } = usePlayer()
  
  if (!currentPodcast) return <MiniPlayerSkeleton />

  return (
    <>
      <div className='container'>
        <button className='nav-button' onClick={() => handleModalClick()} />

        <div className='img-container' onClick={() => handleModalClick()}>
          <TranslucentImage
            clipUrls={currentPodcast.urls}
            channelUrls={currentPodcast.channel.urls}
          />
        </div>
        
        <div className='info' onClick={() => handleModalClick()}>
          <PodcastTitle title={currentPodcast.title} fontSize='.9rem' alwaysJustify='flex-start'/>
          <h4>{currentPodcast.channel.title}</h4>
        </div>
        
        <button
          className='play-button'
          disabled={loading}
          onClick={() => toggleAudio()} 
        >
          <CircleProgressBar 
            progress={duration ? (currentTime * 100) / duration : 0}
            size={50}
            strokeWidth={2}
            circleStroke='#fff'
          />
            
          {isPlaying
            ? <MdPause color='white' size='2.2em' />
            : <MdPlayArrow color='white' size='2.2em' /> 
          }

        </button>
      </div>
      
      <style jsx>{`
        button {
          background: ${colors.black};
        }
        h3 {
          color: ${colors.white};
        }
        h4 {
          color: ${colors.gray};
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        button[disabled] {
          opacity: 0.3;
        }    
        .container {
          max-width: 100%;
          display: grid;
          grid-template-columns: 3rem 1fr 3rem; 
          grid-gap: 1rem;
          align-items: center;
        }
        .nav-button {
          outline: none;
          border: none;
          height: 3px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .img-container {
          flex-grow: 1;
          width: 100%;
        }
        .info {
          max-width: 100%;
          overflow-x: hidden;
        }
        h4 {
          flex-grow: 2;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.7rem;
          margin: 0;
          text-transform: uppercase;
        }
        .play-button {
          outline: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: .5rem; 
        }
      `}</style>
    </>
  );
}
