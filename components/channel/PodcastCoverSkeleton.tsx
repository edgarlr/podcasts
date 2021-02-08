export default function PodcastCoverSkeleton() {
  return (
    <div>
      <div className="img" />
      <div className="title" />

      <style jsx>{`
        .img {
          background: var(--primary-10);
          width: 150px;
          height: 150px;
          padding-bottom: 100%;
          border-radius: 20px;
        }
        .title {
          background: var(--primary-10);
          padding: 0;
          max-width: 70%;
          margin: 12px 0.5rem 0;
          height: 1rem;
        }
      `}</style>
    </div>
  )
}
