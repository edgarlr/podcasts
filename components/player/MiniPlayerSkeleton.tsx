export default function MiniPlayerSkeleton() {
  return (
    <div className="info-container">
      <div className="img-container" />
      <div className="info">
        <div className="title" />
        <div className="channel-title" />
      </div>

      <style jsx>{`
        .img-container,
        .title,
        .channel-title {
          background: var(--gray-90);
          animation: var(--skeleton-animation);
        }
        .info-container {
          display: flex;
          align-items: center;
          position: relative;
          padding: 1rem;
        }

        .img-container {
          min-width: 3rem;
          min-height: 3rem;
          border-radius: 10px;
        }
        .info {
          margin-left: 1rem;
          width: 100%;
        }
        .title {
          height: 0.8rem;
          width: 80%;
          border-radius: 2px;
          margin: 0 0 4px;
        }
        .channel-title {
          height: 0.7rem;
          width: 45%;
          border-radius: 2px;
          margin-top: 8px;
        }
      `}</style>
    </div>
  )
}
