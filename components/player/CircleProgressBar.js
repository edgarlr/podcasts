import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CircleProgressBar = ({ size, progress, strokeWidth, circleStroke }) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOfsett = ((100 - progress) / 100) * circumference;
    setOffset(progressOfsett);
    // circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
  }, [setOffset, circumference, progress, offset]);

  return (
    <div>
      <svg width={size} height={size}>
        <circle
          stroke={circleStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          stroke={circleStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth + 1}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          ref={circleRef}
        />
        {/* <text x={center} y={center}>{progress}%</text> */}
      </svg>

      <style jsx>{`
        div {
          position: absolute;
        }
        svg {
          display: block;
          margin: 20px auto;
          max-width: 100%;
          transform: rotate(-85deg);
        }
        svg circle {
          fill: none;
        }
        svg circle:first-child {
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default CircleProgressBar;

CircleProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleStroke: PropTypes.string.isRequired,
};
