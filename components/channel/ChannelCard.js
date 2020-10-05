import Link from 'next/link';
import { fontWeight, colors } from 'styles/theme';
import { channelPropType, channelShortPropType } from 'lib/customPropTypes';
import { oneOfType } from 'prop-types';
import Description from 'components/ui/Description';

const ChannelCard = ({ channel }) => {
  return (
    <div className="card-container">
      <Link href="/channels/[channelId]" as={`/channels/${channel.id}`}>
        <a className="channel">
          <img src={channel.urls.logo_image.original} alt={channel.title} />
          <div className="info">
            <h2>{channel.title}</h2>
            <Description>{channel.description}</Description>
          </div>
        </a>
      </Link>

      <style jsx>{`
        a {
          color: ${colors.darkGray};
        }
        h2 {
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        .card-container {
          width: 80%;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .channel {
          display: grid;
          grid-template-columns: 1fr 2.5fr;
          grid-gap: 2rem;
          text-decoration: none;
          padding: 1rem 0;
        }
        img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05);
          background: ${colors.lightGray};
        }
        h2 {
          padding: 0;
          margin: 8px 0 0;
          font-size: 0.9rem;
          overflow: hidden;
          line-height: 1.2;
          text-overflow: ellipsis;
          max-height: 2rem;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default ChannelCard;

ChannelCard.propTypes = {
  channel: oneOfType([channelShortPropType, channelPropType]),
};
