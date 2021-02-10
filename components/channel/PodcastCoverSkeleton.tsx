export default function PodcastCoverSkeleton() {
  return (
    <div>
      <div className="img opacityPulse" />
      <div className="title opacityPulse" />

      <style jsx>{`
        .img,
        .title {
          background: var(--primary-10);
          background: var(--primary-10);
        }
        .img {
          width: 150px;
          height: 150px;
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
