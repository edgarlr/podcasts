import Link from 'next/link'
import { fontWeight, colors } from 'styles/theme'
import Description from 'components/ui/Description'
import Image from 'next/image'

const ChannelCard = ({ channel }: { channel: TChannel }) => {
  return (
    <div className="card-container">
      <Link href="/channels/[channelId]" as={`/channels/${channel.id}`}>
        <div className="channel">
          <Image
            src={channel.urls.logo_image.original}
            alt={channel.title}
            width={100}
            height={100}
            // Class available on PodcastCover.js
            className="channel-image"
          />

          <div className="info">
            <h2>{channel.title}</h2>
            <Description content={channel.description} />
          </div>
        </div>
      </Link>

      <style jsx>{`
        a {
          color: ${colors.darkGray};
        }
        h2 {
          font-weight: ${fontWeight.bold};
        }
        .card-container:hover {
          background: ${colors.whiteHover};
        }
      `}</style>

      <style jsx>{`
        .card-container {
          padding: 0rem 1rem;
          border-radius: 20px;
          margin: 0 -1rem;
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
  )
}

export default ChannelCard
