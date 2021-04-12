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
          overflow-y: visible;
          overflow-x: scroll;
          margin: 0 -1.5rem;
          padding: 0.25rem 0;
          scroll-snap-type: x proximity;
          scroll-padding-left: 1.5rem;
          -ms-overflow-style: none;
        }

        .channels-carousel::before,
        .channels-carousel::after {
          content: '';
          padding-left: 1.5rem;
        }

        .channels-carousel::-webkit-scrollbar {
          display: none;
        }
        .channels-carousel > :global(a) {
          scroll-snap-align: start;
          flex: 0 0 auto;
          width: 8.5rem;
          margin-right: 1.4rem;
        }
        @media screen and (min-width: 768px) {
          .channels-carousel > :global(a) {
            margin-right: 2.5rem;
          }
          .channels-carousel::after {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default CarouselGrid
