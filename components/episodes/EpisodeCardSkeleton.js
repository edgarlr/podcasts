import { colors } from 'styles/theme';

const EpisodeCardSkeleton = () => {
  return (
    <div className="episode">
      <div className="title" />
      <div className="duration" />
      <div className="plays" />

      <style jsx>{`
        .episode {
          border-bottom: 1px solid ${colors.lightGray};
        }
        .title,
        .duration,
        .plays {
          background: ${colors.lightGray};
        }
      `}</style>

      <style jsx>{`
        .episode {
          display: block;
          text-decoration: none;
          margin: 0 0.6em;
          padding: 16px 0;
        }
        .title {
          height: 16px;
          margin: 16px 0;
        }
        .duration {
          height: 12px;
          width: 65%;
          margin-bottom: 8px;
        }
        .plays {
          height: 12px;
          width: 25%;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default EpisodeCardSkeleton;
