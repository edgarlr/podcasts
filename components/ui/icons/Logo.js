import PropTypes from 'prop-types';

function Logo({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} rx={6} fill="#131414" />
      <rect
        x={size * 0.21}
        y={size * 0.37}
        width={size * 0.15}
        height={size * 0.25}
        rx="2"
        fill="white"
      />
      <rect
        x={size * 0.43}
        y={size * 0.25}
        width={size * 0.15}
        height={size * 0.5}
        rx="2"
        fill="white"
      />
      <rect
        x={size * 0.65}
        y={size * 0.37}
        width={size * 0.15}
        height={size * 0.25}
        rx="3"
        fill="white"
      />
    </svg>
  );
}

Logo.defaultProps = {
  size: 50,
};

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
