import Link from 'next/link';
import { MdVolumeUp } from 'react-icons/md';
import { colors, fontWeight } from 'styles/theme';
import { dateFormatter, durationToMinutes } from 'lib/utils';
import PropTypes from 'prop-types';
import { episodePropType } from 'lib/customPropTypes';

const EpisodeCard = ({ clip, isActive, info }) => {
  return (
    <Link href="/episodes/[episodeId]" as={`/episodes/${clip.id}`}>
      <a className={'episode ' + (isActive ? 'active' : '')}>
        <h2>{clip.title}</h2>

        {info ? (
          <div className="meta">{info}</div>
        ) : (
          <p className="description">{clip.description}</p>
        )}

        <p className="duration">
          {dateFormatter(clip.uploaded_at)} · {durationToMinutes(clip.duration)}
        </p>

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
            box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
          }
          .active h2 {
            color: ${colors.white};
          }
          .active p {
            color: ${colors.lightGray};
          }
          .episode:hover {
            background: rgba(0, 0, 0, 0.007);
          }
          .meta,
          .duration,
          .description {
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
            margin: -0.5rem;
            padding: 16px 1.25em;
            border-bottom: none;
            border-radius: 20px;
            position: relative;
            text-align: left;
          }
          h2 {
            margin: 0.8rem 0;
            font-size: 16px;
          }
          .active p,
          .active h2 {
            width: 80%;
          }
          .active h2 {
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
          .active .description::after {
            background: ${colors.black};
          }
          .meta {
            font-weight: ${fontWeight.bold};
            margin-top: 0.7rem;
            font-size: 0.8rem;
          }
          .duration {
            font-size: 0.7rem;
            margin: 0;
          }
          .description {
            margin-top: 0.7rem;
            font-size: 0.85rem;
            padding: 0;
            overflow: hidden;
            line-height: 1.3;
            height: 3.8em;
            position: relative;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .description::after {
            content: '...';
            padding-left: 0.2rem;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 4rem;
            height: 1.2em;
            background: white;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default EpisodeCard;

EpisodeCard.defaultProps = {
  info: null,
  isActive: false,
};

EpisodeCard.propTypes = {
  clip: episodePropType,
  isActive: PropTypes.bool,
  info: PropTypes.string,
};
