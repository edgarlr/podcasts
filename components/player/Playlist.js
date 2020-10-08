import IconAudioPlaying from 'components/ui/icons/IconAudioPlaying';
import { usePlayer } from 'lib/contexts';
import { useRouter } from 'next/router';
import React from 'react';
import {
  MdKeyboardArrowDown,
  // MdKeyboardArrowUp,
  MdPlayArrow,
} from 'react-icons/md';

const Playlist = () => {
  const {
    playlist,
    currentIndex,
    current,
    SetCurrentIndex,
    audioRef,
  } = usePlayer();

  const router = useRouter();

  const onPodcastClick = (id) => {
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id === id) {
        audioRef.current.src = playlist[i].urls.high_mp3;
        audioRef.current.play();
        SetCurrentIndex(i);
        break;
      }
    }
  };

  const onNowPlayingClick = (id) => {
    router.push(`/episodes/${id}`);
  };

  return (
    <div className="container">
      {/* <div className="title">
        Playlist
        <span>{<MdKeyboardArrowUp size="1.5rem" color="white" />}</span>
      </div> */}
      <ul>
        <div className="title">
          Now Playing
          <span>
            <MdKeyboardArrowDown size="1.5rem" color="white" />
          </span>
        </div>
        <li
          onClick={() => onNowPlayingClick(current.id)}
          key={playlist[currentIndex].id}
        >
          <div style={{ color: '#a0f6ff' }}>{playlist[currentIndex].title}</div>
          <span>{playlist[currentIndex].channel.title}</span>
          <div className="playing-icon">
            <IconAudioPlaying color="#a0f6ff" size={15} strokeWidth={4} />
          </div>
        </li>
        <div className="title">Next from: {current.channel.title}</div>
        {playlist.slice(currentIndex + 1).map((episode) => (
          <li onClick={() => onPodcastClick(episode.id)} key={episode.id}>
            <p>{episode.title}</p>
            <span>{episode.channel.title}</span>
            <div className="play-icon">
              <MdPlayArrow color={'white'} size={'1.5rem'} />
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .title {
          color: white;
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 0.5rem 0;
          font-weight: bold;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 0.95rem;
          position: relative;
        }
        .title > span {
          position: absolute;
          right: 0;
          top: 50%;
          cursor: pointer;
          transform: translateY(-50%);
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          padding: 0.8rem 1rem;
          cursor: pointer;
          font-size: 0.9rem;
          position: relative;
        }
        li:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        li > span {
          opacity: 0.4;
          font-size: 0.7rem;
        }
        li > p {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 85%;
          overflow: hidden;
        }

        .play-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
        }
        .playing-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
        li:hover > .play-icon {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Playlist;
