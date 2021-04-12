import Link from 'next/link'
import Image from 'next/image'

type Props = {
  channel: TChannel
  index: number
}

const ChannelCard = ({ channel, index }: Props) => {
  return (
    <>
      <Link href={`/channels/${channel.id}`}>
        <a className="channel">
          <p className="number">{index + 1}</p>
          <div className="image-container">
            <Image
              src={channel.urls.logo_image.original}
              alt={channel.title}
              width={72}
              height={72}
              // Clases declared on main.css
              className="square-image"
            />
          </div>

          <div className="info">
            <h2 className="title">{channel.title}</h2>
            <p className="description">{channel.description}</p>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .channel {
          display: flex;
          align-items: center;
          padding: 1rem 0;
          width: 100%;
          max-width: 100%;
          cursor: pointer;
          transform: scale(1);
          transition: transform 0.15s;
        }
        .channel:hover {
          transform: scale(1.02);
        }
        .number {
          font-size: var(--font-md);
          font-weight: bold;
          color: var(--primary);
        }
        .image-container {
          flex: 0 0 4.5rem;
          margin: 0 1rem;
          width: 100%;
        }
        .info {
          flex: 0 0 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title,
        .description {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0;
          line-height: 1.25;
        }
        .title {
          font-size: var(--font-sm);
          margin: 0;
          max-height: 2rem;
          font-weight: bold;
        }
        .description {
          font-size: var(--font-xs);
          color: var(--gray-60);
          max-height: 1.7rem;
          margin: 0.25rem 0;
        }
      `}</style>
    </>
  )
}

export default ChannelCard
