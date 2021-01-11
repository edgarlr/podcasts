import PropTypes from 'prop-types';
import Image from 'next/image';

export default function ImgTranslucent(props) {
  const { url, alt, fullBlur, borderRadius, width, height, margin } = props;

  return (
    <div className="image-container">
      <Image
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="image-main"
      />

      <div className={`background-container ${fullBlur ? 'ultra' : ''}`}>
        <Image src={url} layout="fill" objectFit="cover" quality={25} />
      </div>

      <style jsx global>{`
        .image-main {
          border-radius: ${borderRadius || '20px'};
        }
      `}</style>

      <style jsx>{`
        .image-container {
          position: relative;
          width: ${width || '100%'};
          padding-bottom: ${height || '100%'};
          margin: ${margin || 0};
        }
        .background-container {
          position: absolute;
          width: 80%;
          height: 80%;
          filter: blur(15px);
          transform: translate(-50%, 30%);
          left: 50%;
          z-index: -1;
          opacity: 0.8;
        }
        .background-container.ultra {
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
  alt: PropTypes.string.isRequired,
  fullBlur: PropTypes.bool,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};
