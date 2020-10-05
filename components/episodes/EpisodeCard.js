import Link from 'next/link';
import { MdVolumeUp } from 'react-icons/md';
import { colors, fontWeight } from 'styles/theme';
import { dateFormatter, durationToMinutes } from 'lib/utils';
import PropTypes from 'prop-types';
import { episodePropType } from 'lib/customPropTypes';
import Description from 'components/ui/Description';
import CardInfo from 'components/ui/CardInfo';

const EpisodeCard = ({ clip, isActive, info }) => {
  return (
    <Link href="/episodes/[episodeId]" as={`/episodes/${clip.id}`}>
      <a className={'episode ' + (isActive ? 'active' : '')}>
        <h2>{clip.title}</h2>

        {info ? (
          <div className="meta">{info}</div>
        ) : (
          <Description>{clip.description}</Description>
        )}

        <CardInfo
          data={[
            dateFormatter(clip.uploaded_at),
            durationToMinutes(clip.duration),
          ]}
        />

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
            background: #f4f4f6;
          }
          .meta {
            color: ${colors.midGray};
          }
        `}</style>

        <style jsx>{`
          .episode {
            display: block;
            text-decoration: none;
            margin: 0;
            padding: 16px 0.3rem;
            cursor: pointer;
            transition: 0.2s;
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
          @media screen and (min-width: 720px) {
            .episode {
              padding: 16px 1rem;
            }
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
