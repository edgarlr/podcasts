import PropTypes from 'prop-types';

export default function ImgTranslucent(props) {
  const { url, fullBlur, borderRadius, width, height, margin } = props;

  return (
    <div className="image-container">
      <div
        className={`image-main ${fullBlur ? 'ultra' : ''}`}
        style={{ backgroundImage: `url(${url})` }}
      />

      <style jsx>{`
        .image-container {
          position: relative;
          width: ${width || '100%'};
          margin: ${margin || 0};
        }
        .image-main {
          width: 100%;
          border-radius: ${borderRadius || '25%'};
          background-position: 50% 50%;
          padding-bottom: ${height || '100%'};
          background-size: cover;
          position: relative;
        }
        .image-main::after {
          content: '';
          width: 80%;
          height: 80%;
          filter: blur(15px);
          transform: translate(-50%, 30%);
          background: inherit;
          border-radius: inherit;
          background-position: inherit;
          background-size: inherit;
          margin: inherit;
          position: absolute;
          left: 50%;
          z-index: -1;
          opacity: 0.8;
        }
        .image-main.ultra::after {
          filter: blur(40px);
          width: 100%;
          height: 100%;
          transform: translate(-50%, 0);
        }
      `}</style>
    </div>
  );
}

ImgTranslucent.defaultProps = {
  fullBlur: false,
  borderRadius: null,
};

ImgTranslucent.propTypes = {
  url: PropTypes.string.isRequired,
  fullBlur: PropTypes.bool,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};
