import Link from 'next/link'
import Image from 'next/image'
import { fontWeight, colors } from 'styles/theme'

export const PodcastCover = ({ channel }: { channel: TChannel }) => {
  return (
    <div className="container">
      <Link href="/channels/[channelId]" as={`/channels/${channel.id}`}>
        <div>
          <Image
            src={channel.urls.logo_image.original}
            alt={channel.title}
            width={150}
            height={150}
            className="channel-image"
          />
        </div>
      </Link>
      <h3>{channel.title}</h3>

      <style jsx>{`
        h3 {
          color: ${colors.darkGray};
          font-weight: ${fontWeight.regular};
        }
        .container:hover {
          background: ${colors.whiteHover};
        }
      `}</style>

      <style jsx global>{`
        .channel-image {
          border-radius: 15px;
          box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <style jsx>{`
        .container {
          border-radius: 15px;
          transition: 0.15s;
          cursor: pointer;
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
  )
}
