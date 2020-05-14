import Link from 'next/link';

export default function PodcastCover({channel, index}) {
  return (
    <div>
      <Link
        href={`/[channel]?id=${channel.id}`}
        key={index}
        as={`${channel.id}`}
      >
        <a className='channel'>
          <img src={channel.urls.logo_image.original} alt='' />
          <h2>{channel.title}</h2>
        </a>
      </Link>

      <style jsx>{`
        .channel {
          display: block;
          border-radius: 3px;
          margin: 0;
        }
        img {
          width: 100%;
          border: 1px solid #e2e2e2;
          border-radius: 20px;
        }
        a {
          color: black;
          text-decoration: none;
        }
        h2 {
          padding: 0;
          margin: 12px 0 0;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
