import { useEffect, useRef, useState } from 'react'
import { usePlayer } from '@lib/hooks/use-player'

type Props = {
  size: number
  strokeWidth: number
  circleStroke: string
}

const ProgressCircle = ({ size, strokeWidth, circleStroke }: Props) => {
  const { duration, audioRef } = usePlayer()

  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOfsett =
      ((100 - (audioRef.currentTime * 100) / duration) / 100) * circumference
    setOffset(progressOfsett)
  }, [setOffset, circumference, audioRef, duration, offset])

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
          margin: 0;
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
