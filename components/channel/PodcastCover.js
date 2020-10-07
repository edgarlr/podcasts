import Link from 'next/link';
import { fontWeight, colors } from 'styles/theme';
import { channelPropType, channelShortPropType } from 'lib/customPropTypes';
import { oneOfType } from 'prop-types';

export const PodcastCover = ({ channel }) => {
  return (
    <div className="container">
      <Link href="/channels/[channelId]" as={`/channels/${channel.id}`}>
        <a className="channel">
          <img src={channel.urls.logo_image.original} alt={channel.title} />
          <h3>{channel.title}</h3>
        </a>
      </Link>

      <style jsx>{`
        a {
          color: ${colors.darkGray};
        }
        h3 {
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        .container {
          border-radius: 20px;
          transition: 0.15s;
        }
        .channel {
          margin: 0;
        }
        .container:hover {
          background: ${colors.whiteHover};
        }
        img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05);
          background: ${colors.lightGray};
        }
        a {
          text-decoration: none;
        }
        h3 {
          padding: 0;
          margin: 8px 0 0;
          font-size: 0.9rem;
          text-align: center;
          overflow: hidden;
          line-height: 1.4;
          height: 2.8em;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        @media screen and (min-width: 668px) {
          h3 {
            font-size: 1rem;
            text-align: left;
            padding-left: 0.5rem;
            font-weight: bold;
          }
        }
      `}</style>
    </div>
  );
};

PodcastCover.propTypes = {
  channel: oneOfType([channelShortPropType, channelPropType]),
};
