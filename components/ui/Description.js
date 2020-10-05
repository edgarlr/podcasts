import PropTypes from 'prop-types';
import { colors } from 'styles/theme';

const Description = ({ children }) => {
  return (
    <p className="description">
      {children}

      <style jsx>{`
        .description {
          color: ${colors.midGray};
          font-size: 0.85rem;
          padding: 0;
          overflow: hidden;
          line-height: 1.25;
          max-height: 2em;
          position: relative;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .description::after {
          content: '...';
          padding-left: 0.2rem;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 4rem;
          background: white;
        }
      `}</style>
    </p>
  );
};

export default Description;

Description.propTypes = {
  children: PropTypes.element.isRequired,
};
