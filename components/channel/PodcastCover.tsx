import Link from 'next/link'
import Image from 'next/image'

export const PodcastCover = ({ channel }: { channel: TChannel }) => {
  return (
    <Link href={`/channels/${channel.id}`}>
      <div className="container">
        <Image
          src={channel.urls.logo_image.original}
          alt={channel.title}
          width={150}
          height={150}
          // Clases declared on main.css
          className="square-image"
        />

        <h3>{channel.title}</h3>

        <style jsx>{`
          .container {
            border-radius: 15px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.2s;
          }
          .container:hover {
            transform: scale(1.025);
          }
          h3 {
            color: var(--primary-90);
            font-weight: bold;
            text-align: left;
            font-size: var(--font-md);
            padding: 0 0.5rem;
            margin: 8px 0 0;
            overflow: hidden;
            line-height: 1.25;
            height: 2.45em;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}</style>
      </div>
    </Link>
  )
}
