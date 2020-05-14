import PodcastCover from './PodcastCover';
import FiltersIcon from './FiltersIcon';

export default function PodcastGridCarousel({ channels, title}) {
  return (
    <div>
      <div className='header-channels'>
        <p>{title}</p>
      </div>

      <div className='channels-carousel'>
        {channels.map((channel, index) => (
          <PodcastCover channel={channel} index={index} />
        ))}
      </div>

      <style jsx>{`
        .channels-carousel {
          display: grid;
          padding: 24px 1.5em;
          grid-gap: 42px 10px;
          grid-auto-flow: column;
          grid-auto-columns: minmax(145px, 1fr);
          overflow-x: auto;
          -ms-overflow-style: none;
        }
        .channels-carousel::-webkit-scrollbar {
          display: none;
        }
        .header-channels {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          margin: 0 1.5em;
          border-bottom: 1px solid #e2e2e2;
        }
        p {
          font-size: 12px;
          color: black;
          font-weigth: 400;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
