import EpisodeCardSkeleton from 'components/episodes/EpisodeCardSkeleton';
import { colors } from 'styles/theme';

const SkeletonChannelPage = () => {
  return (
    <div className="layout">
      <div className="main-title" />
      <div className="banner" />
      <div className="episode-list">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
          <EpisodeCardSkeleton key={card} />
        ))}
      </div>

      <style jsx>{`
        .layout {
          padding: 2rem 1.5rem 7rem;
        }
        .main-title,
        .banner {
          background: ${colors.lightGray};
        }
        .main-title {
          width: 100%;
          margin: 3rem 0 1rem;
          padding-bottom: 1.6rem;
          width: 50%;
        }
        .banner {
          width: 100%;
          border-radius: 20px;
          padding-bottom: 35%;
          margin: 1.5rem 0 0.75rem;
        }
        .episode-list {
          margin-top: 4rem;
          border-top: 1px solid ${colors.lightGray};
        }
      `}</style>
    </div>
  );
};

export default SkeletonChannelPage;
