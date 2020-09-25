import { colors } from 'styles/theme';

export default function PodcastCoverSkeleton() {
  return (
    <div>
      <div className="img" />
      <div className="title" />

      <style jsx>{`
        .img {
          background: ${colors.lightGray};
        }
        .title {
          background: ${colors.lightGray};
        }
      `}</style>

      <style jsx>{`
        .img {
          width: 100%;
          padding-bottom: 100%;
          border-radius: 20px;
        }
        .title {
          padding: 0;
          max-width: 70%;
          margin: 8px auto 0;
          height: 0.9rem;
        }
      `}</style>
    </div>
  );
}
