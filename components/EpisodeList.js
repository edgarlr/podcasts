import {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router';
import FiltersIcon from './FiltersIcon';
import {PlayerContext} from '../contexts/PlayerContext'
import {MdVolumeUp} from 'react-icons/md'

export default function EpisodeList ({audioClips}) {
  const { SetCurrentIndex, currentSongIndex, SetCurrent, SetPlaylist} = useContext(PlayerContext)
  const [playlist, setPlaylist] = useState(null);

  const router = useRouter();

  const onPodcastClick = (podcast, channelId, index) => {
    SetPlaylist(playlist)
    SetCurrentIndex(index)
    SetCurrent(podcast)
    const podcastId = podcast.id

    router.push(
      {
        pathname: `/[channel]/[podcast]`,
        query: { podcastId: podcastId },
        as: `/${channelId}/${podcastId}`,
      },
      `/${channelId}/${podcastId}`
    );
    console.log(router.query);
    
  }

  const [list, setList] = useState(audioClips)

  const [sortType, setSortType] = useState('uploaded_at')
  const [isReversed, setIsReversed] = useState(false)
  
  useEffect(() => { 
    const sorted = (key, list, isReversed) => {
      if (isReversed) {
        return [...list].sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
      }
      else if (key === 'counts') {
        return [...list].sort((a,b) => (a[key].plays < b[key].plays ? 1 : a[key].plays > b[key].plays ? -1 : 0))
      }
      return [...list].sort((a,b) => (a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0))
    }
    setList(sorted(sortType, list, isReversed));


    const playlistArray = list.map((clip) => clip.id);
    setPlaylist(playlistArray);

  }, [sortType, isReversed])

  const handleFilterClick = (type) => {
    if (type === 'latest') {
      setSortType('uploaded_at')
      setIsReversed(false);
    }
    else if (type === 'popular') {
      setSortType('counts');
      setIsReversed(false);
    }
    else {
      setSortType('uploaded_at');
      setIsReversed(true);
    }
  }


  return (
    <div>
      <div className='episodes-header'>
        <h3>{`${audioClips.length} EPISODIOS`}</h3>
        <FiltersIcon handleFilterClick={handleFilterClick} />
      </div>

      {list.map((clip, index) => (
        <div
          className={'episode ' + (currentSongIndex === index ? 'active' : '')}
          onClick={() => onPodcastClick(clip, clip.channel.id, index)}
          key={clip.id}
          >
          <h2>{clip.title}</h2>
          <div className='meta'>{Math.ceil(clip.duration / 60)} minutes</div>
          <p>{clip.title}</p>
          {/* <div>{clip.counts.plays} reproducciones</div> */}
          <p>{clip.counts.plays} reproducciones</p>
          {currentSongIndex === index && (
            <span>
              <MdVolumeUp size='2em' color='white' />
            </span>
          )}
        </div>
      ))}

      <style jsx>{`
        .episodes-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          text-align: left;
          border-bottom: 1px solid #e2e2e2;
        }
        h3 {
          font-size: 12px;
          font-weight: 600;
          margin: 0;
        }
        .episode {
          display: block;
          text-decoration: none;
          margin: 0 0.6em;
          padding: 16px 0;
          border-bottom: 1px solid #e2e2e2;
          cursor: pointer;
        }
        .active {
          background: black;
          color: white;
          margin: 0;
          padding: 16px 1em;
          border-bottom: none;
          border-radius: 20px;
          position: relative;
          text-align: left;
        }
        .active h2,
        .active p {
          width: 70%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .active span {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
        .episode:hover {
          color: #000;
        }
        h2 {
          margin: 16px 0;
          font-size: 16px;
        }
        .episode .meta {
          color: #979797;
          font-size: 12px;
          margin-bottom: 8px;
        }
        p {
          color: #979797;
          font-size: 12px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
