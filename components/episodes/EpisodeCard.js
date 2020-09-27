import Link from 'next/link';
import { MdVolumeUp } from 'react-icons/md';
import { colors, fontWeight } from 'styles/theme';
import { durationToMinutes } from 'lib/utils';

const EpisodeCard = ({ clip, isActive, info = null }) => {
  if (!info) info = `${clip.counts.plays} plays`;

  return (
    <Link href="/[channel]/[podcast]" as={`/${clip.channel.id}/${clip.id}`}>
      <a className={'episode ' + (isActive ? 'active' : '')}>
        <h2>{clip.title}</h2>

        <div className="meta">{info}</div>

        <p>{durationToMinutes(clip.duration)}</p>

        {isActive && (
          <span>
            <MdVolumeUp size="2em" color="white" />
          </span>
        )}

        <style jsx>{`
          .episode {
            border-bottom: 1px solid ${colors.lightGray};
          }
          .active {
            background: ${colors.black};
            color: ${colors.white};
          }
          .episode:hover {
            color: ${colors.black};
          }
          .episode .meta {
            color: ${colors.midGray};
          }
          p {
            color: ${colors.midGray};
          }
        `}</style>

        <style jsx>{`
          .episode {
            display: block;
            text-decoration: none;
            margin: 0 0.6em;
            padding: 16px 0;
            cursor: pointer;
          }
          .active {
            margin: 0 -0.5rem;
            padding: 16px 1.3em;
            border-bottom: none;
            border-radius: 20px;
            position: relative;
            text-align: left;
          }
          h2 {
            margin: 16px 0 14px;
            font-size: 16px;
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
            right: 1.3rem;
            top: 50%;
            transform: translateY(-50%);
          }
          .episode .meta {
            font-size: 0.75rem;
            margin-bottom: 8px;
            font-weight: ${fontWeight.bold};
          }
          p {
            font-size: 12px;
            margin: 0;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default EpisodeCard;
