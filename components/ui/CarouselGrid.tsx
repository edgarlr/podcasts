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
          padding: 1.5rem 0;
          scroll-snap-type: x proximity;
          -ms-overflow-style: none;
        }
        .channels-carousel::before,
        .channels-carousel::after {
          content: '';
          padding-left: 0.8rem;
        }
        .channels-carousel::-webkit-scrollbar {
          display: none;
        }
        .channels-carousel > :global(div) {
          flex: 0 0 auto;
          max-width: 160px;
          padding: 0.8rem 0.4rem 1.5rem;
        }
        @media screen and (max-width: 320px) {
          .channels-carousel > :global(div) {
            max-width: 130px;
          }
        }
        @media screen and (min-width: 760px) {
          .channels-carousel > :global(div) {
            padding: 0.8rem 0.8rem 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default CarouselGrid
