export default function PodcastCoverSkeleton() {
  return (
    <div>
      <div className="img" />
      <div className="title" />

      <style jsx>{`
        .img {
          background: var(--gray-20);
          width: 100%;
          padding-bottom: 100%;
          border-radius: 20px;
        }
        .title {
          background: var(--gray-20);
          padding: 0;
          max-width: 70%;
          margin: 8px auto 0;
          height: 0.9rem;
        }
      `}</style>
    </div>
  )
}
