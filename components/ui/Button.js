import { colors, fontWeight } from 'styles/theme';
import PropTypes from 'prop-types';

const Button = ({ isActive, handleClick, children }) => {
  return (
    <button
      onClick={() => handleClick(isActive)}
      className={isActive ? 'active' : ' '}
    >
      {children}

      <style jsx>{`
        .active {
          background: ${colors.white};
          color: ${colors.black};
          border: 1px solid ${colors.black};
        }
        button {
          color: ${colors.white};
          background: ${colors.black};
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        button {
          border: none;
          padding: 8px 12px 6px;
          font-size: 0.7rem;
          border-radius: 10px;
          cursor: pointer;
          outline: none;
        }
        @media screen and (min-width: 768px) {
          button {
            padding: 8px 16px 6px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </button>
  );
};

export default Button;

Button.defaultProps = {
  isActive: false,
};

Button.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
