export default function PodcastCoverSkeleton() {
  return (
    <div className="container">
      <div className="img opacityPulse" />
      <div className="title opacityPulse" />

      <style jsx>{`
        .container {
          width: 100%;
          display: block;
        }
        .img,
        .title {
          background: var(--primary-10);
          background: var(--primary-10);
        }
        .img {
          width: 100%;
          padding-bottom: 100%;
          border-radius: 20px;
        }
        .title {
          padding: 0;
          max-width: 70%;
          margin: 12px 0.5rem 0;
          height: 1rem;
        }
      `}</style>
    </div>
  )
}
