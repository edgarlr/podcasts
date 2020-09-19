export default function GridCarousel({ children }) {
  return (
    <div className='channels-carousel'>
      
      {children}

      <style jsx>{`
        .channels-carousel {
          display: grid;
          grid-gap: 1rem .8rem;
          grid-template-columns: 10px;
          grid-auto-flow: column;
          grid-auto-columns: calc(50% - 1rem * 2);
          height: 13rem;
          overflow-x: scroll;
          margin: 0 -1.5rem;
          padding: 1.5rem 0;
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
      `}</style>
    </div>
  );
}
