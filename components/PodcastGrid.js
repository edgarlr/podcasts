import PodcastCover from './PodcastCover';

export default function PodcastGrid({channels, title}) {
  return (
    <div>
      <div className='header-channels'>
        <p>{title}</p>
      </div>

      <div className='channels'>
        {channels.map((channel, index) => (
          <PodcastCover channel={channel} index={index} key={index}/>
        ))}
      </div>

      <style jsx>{`
        .header-channels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid #e2e2e2;
        }
        p {
          font-size: 12px;
          color: black;
          font-weigth: 400;
          text-transform: uppercase;
          margin: 0;
        }
        .channels {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-gap: 42px 10px;
          padding: 24px 0;
        }
      `}</style>
    </div>
  );
}
