import PodcastCover from './PodcastCover';
import FiltersIcon from './FiltersIcon';

export default function PodcastGridCarousel({ channels, title = null}) {
  return (
    <div>
      <div className='header-channels'>
        <p>{title}</p>
      </div>

      <div className='channels-carousel'>
        {channels.map((channel, index) => (
          <PodcastCover channel={channel} index={index} key={index} />
        ))}
      </div>

      <style jsx>{`
        .channels-carousel {
          display: grid;
          grid-template-columns: 12px;
          grid-auto-columns: minmax(145px, 180px);
          grid-gap: 42px 10px;
          grid-auto-flow: column;
          overflow-x: auto;

          padding: 24px 0;
          scroll-snap-type: x proximity;
          -ms-overflow-style: none;
        }
        .channels-carousel:before,
        .channels-carousel:after {
          content: '';
          width: 24px;
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
