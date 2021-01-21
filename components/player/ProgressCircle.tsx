import { useEffect, useRef, useState } from 'react'
import { useSharedState } from 'lib/hooks/useSharedState'

type Props = {
  size: number
  strokeWidth: number
  circleStroke: string
}

const ProgressCircle = ({ size, strokeWidth, circleStroke }: Props) => {
  const [progress] = useSharedState('progress', 0)

  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOfsett = ((100 - progress) / 100) * circumference
    setOffset(progressOfsett)
  }, [setOffset, circumference, progress, offset])

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
  )
}

export default ProgressCircle