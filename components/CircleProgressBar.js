import React from 'react'
import { colors } from 'styles/theme'

const CircleProgressBar = ({percentage}) => {
  // console.log(percentage);
  return (
    <div>
      <svg style={{strokeDashiset: `calc(440 - (440 * ${percentage}) / 100)` }}>
        <circle cx='20' cy='20' r='20'></circle>
        <circle cx='20' cy='20' r='20'></circle>
      </svg>

      <style jsx>{`
        div {
          position: absolute;
          transform: translateX(-1px)
        }
        svg {
          position: relative;
          width: 50px;
          height: 50px;
          transform: rotate(-85deg);
        }
        svg circle {
          width: 100%;
          height: 100%;
          fill: none;
          stroke-width: 2;
          stroke: ${colors.white};
          opacity: .2;
          transform: translate(5px, 5px);;
        }
        svg circle:nth-child(2) {
          stroke-dasharray: 440;
          stroke-dashoffset: 440;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default CircleProgressBar
