import { colors } from 'styles/theme';
import PropTypes from 'prop-types';

const BannerImage = ({ url }) => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${url})` }}>
      <div
        className="banner-shadow"
        style={{ backgroundImage: `url(${url})` }}
      />

      <style jsx>{`
        .banner {
          background-color: ${colors.gray};
        }
        .banner-shadow {
          background-color: ${colors.gray};
        }
      `}</style>

      <style jsx>{`
        .banner {
          margin: 1.5rem 0 0.75rem;
          width: 100%;
          background-position: 50% 50%;
          height: 120px;
          border-radius: 20px;
          background-size: cover;
          position: relative;
        }
        .banner-shadow {
          margin: 20px 0 0;
          position: absolute;
          width: 80%;
          background-position: 50% 50%;
          height: 105px;
          border-radius: 20px;
          background-size: cover;
          filter: blur(15px);
          left: 50%;
          transform: translate(-50%);
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default BannerImage;

BannerImage.propTypes = {
  url: PropTypes.string.isRequired,
};
