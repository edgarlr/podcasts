import PropTypes from 'prop-types';

const IconAudioPlaying = ({ size, strokeWidth, color }) => {
  return (
    <div>
      <svg width={size * 1.5} height={size} fill={color}>
        <rect id="firstLine" x={0} y={0} height={size} width={strokeWidth} />
        <rect x={size / 2} y={0} height={size} width={strokeWidth} />
        <rect x={size} y={0} height={size} width={strokeWidth} />
      </svg>
      <style jsx>{`
        rect {
          animation: icon-move 0.9s infinite ease-in-out;
          animation-direction: alternate;
        }
        rect:nth-child(2) {
          animation-direction: alternate-reverse;
        }

        @keyframes icon-move {
          from {
            transform: scaleY(1) translateY(0);
          }
          to {
            transform: scaleY(0.5) translateY(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default IconAudioPlaying;

IconAudioPlaying.defaultProps = {
  size: 20,
  strokeWidth: 7,
};

IconAudioPlaying.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
};
