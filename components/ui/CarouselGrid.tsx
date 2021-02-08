const CarouselGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="channels-carousel">
      {children}

      <style jsx>{`
        .channels-carousel {
          display: flex;
          flex-wrap: nowrap;
          -webkit-overflow-scrolling: touch;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          overflow-x: scroll;
          margin: 0 -1.5rem;

          scroll-snap-type: x proximity;
          -ms-overflow-style: none;
        }
        .channels-carousel::after {
          content: '';
          padding-left: 1.5rem;
        }
        .channels-carousel::-webkit-scrollbar {
          display: none;
        }
        .channels-carousel > :global(div) {
          scroll-snap-align: start;
          flex: 0 0 auto;
          max-width: calc(144px + 1.5rem);
          padding-left: 1.5rem;
        }

        @media screen and (min-width: 768px) {
          .channels-carousel > :global(div) {
            margin-right: 1rem;
            max-width: calc(150px + 1.5rem);
          }
        }
      `}</style>
    </div>
  )
}

export default CarouselGrid
