import React from 'react'
import Link from 'next/link'
import Router, {useRouter} from 'next/router';
import FiltersIcon from './FiltersIcon';

export default function EpisodeList ({audioClips}) {
  const router = useRouter();
  const onPodcastClick = (podcastId, channelId) => {
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
  return (
    <div>
      <div className='episodes-header'>
        <h3>{`${audioClips.length} EPISODIOS`}</h3>
        <FiltersIcon />
      </div>

      {audioClips.map((clip) => (
        <div
          className='episode'
          onClick={() => onPodcastClick(clip.id, clip.channel.id)}
          key={clip.id}
        >
          <h2>{clip.title}</h2>
          <div className='meta'>{Math.ceil(clip.duration / 60)} minutes</div>
          <p>{clip.title}</p>
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
          margin: 0 .6em;
          padding: 16px 0;
          border-bottom: 1px solid #e2e2e2;
          cursor: pointer;
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
