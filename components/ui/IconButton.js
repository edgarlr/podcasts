import PropTypes from 'prop-types';
import { colors } from 'styles/theme';

const IconButton = ({ children, handleOnClick, size, secondary }) => (
  <button className={secondary && 'secondary'} onClick={handleOnClick}>
    {children}
    <style jsx>{`
      button {
        background: transparent;
        outline: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        width: ${size || '2.5rem'};
        height: ${size || '2.5rem'};
      }
      button:hover {
        background: ${colors.whiteHover};
      }
      .secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}</style>
  </button>
);

export default IconButton;

IconButton.defaultProps = {
  size: null,
  secondary: false,
};

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  secondary: PropTypes.bool,
};
