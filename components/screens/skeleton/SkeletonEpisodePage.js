import EpisodeCardSkeleton from 'components/episodes/EpisodeCardSkeleton';
import { colors } from 'styles/theme';

const SkeletonEpisodePage = () => {
  return (
    <div className="layout">
      <div className="title-container">
        <div className="title-line" />
        <div className="title-line" />
        <div className="title-line" />
      </div>
      <div className="description-container">
        <div className="description-line" />
        <div className="description-line" />
        <div className="description-line" />
        <div className="description-line" />
      </div>
      <div className="episode-list">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
          <EpisodeCardSkeleton key={card} />
        ))}
      </div>

      <style jsx>{`
        .layout {
          padding: 2rem 1.5rem 7rem;
        }
        .title-line,
        .description-line {
          background: ${colors.lightGray};
        }
        .title-container {
          margin: 3rem 0 1rem;
          width: 100%;
        }
        .title-line {
          width: 100%;
          margin: 1rem 0;
          padding-bottom: 1.6rem;
        }
        .description-container {
          margin: 3rem 0;
        }
        .description-line {
          width: 100%;
          padding-bottom: 0.8rem;
          margin: 0.7rem 0;
        }
        .title-line:last-child,
        .description-line:last-child {
          width: 80%;
        }
        .episode-list {
          margin-top: 2rem;
          border-top: 1px solid ${colors.lightGray};
        }
      `}</style>
    </div>
  );
};

export default SkeletonEpisodePage;
