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
          background: var(--gray-80);
        }
        .info-container {
          display: flex;
          align-items: center;
          position: relative;
        }

        .img-container {
          min-width: 3.5em;
          min-height: 3.5em;
          border-radius: 15px;
        }
        .info {
          margin-left: 1em;
          width: 100%;
        }
        .title {
          height: 0.85em;
          width: 80%;
          border-radius: 2px;
          margin: 0 0 4px;
        }
        .channel-title {
          height: 0.7em;
          width: 45%;
          border-radius: 2px;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
