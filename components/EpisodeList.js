import React, { Component } from 'react'
import Link from 'next/link'

export default class EpisodeList extends Component {
  render() {
    const {audioClips} = this.props
    return (
      <div>
        {audioClips.map((clip) => (
          <Link href={`/podcast?id=${clip.id}`} key={clip.id}>
            <a className='podcast'>
              <h3>{clip.title}</h3>
              <div className='meta'>
                {Math.ceil(clip.duration / 60)} minutes
              </div>
              {clip.title}
            </a>
          </Link>
        ))}

        <style jsx>{`
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}</style>
      </div>
    );
  }
}
