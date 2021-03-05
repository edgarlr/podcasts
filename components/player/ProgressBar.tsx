import {
  usePlayer,
  usePlayerControls,
  usePlayerCurrentTime,
} from 'lib/hooks/use-player'
import { getDurationInMSS } from 'lib/utils/durationToMSS'
import { useEffect, useState } from 'react'

export const ProgressBar = () => {
  const { duration } = usePlayer()
  const { currentTime } = usePlayerCurrentTime()
  const { updateTime } = usePlayerControls()
  const [computedCurrentTime, setComputedCurrentTime] = useState(0)

  const handleProgress = (e: any) => {
    const compute = (e.target.value * duration) / 100
    setComputedCurrentTime(compute)
    updateTime(compute)
  }

  const progress = currentTime ? (currentTime * 100) / duration : 0

  useEffect(() => {
    setComputedCurrentTime(currentTime)
  }, [currentTime])

  return (
    <div>
      <input
        onChange={handleProgress}
        value={computedCurrentTime ? (computedCurrentTime * 100) / duration : 0}
        type="range"
        name="progressbar"
        id="pgrbar"
        className="slider"
      />
      <div
        className="progressbar-fill"
        style={{
          width: `${progress}%`,
        }}
      />

      <div className="progress-time">
        <div>{getDurationInMSS(currentTime)}</div>
        <div>{getDurationInMSS(duration)}</div>
      </div>

      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          height: 3px;
          background-color: var(--primary-80);
          width: 100%;
          outline: none;
          position: relative;
          cursor: pointer;
          transition: background-color 0.15s;
        }
        .slider:hover {
          background-color: var(--primary-60);
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-progress-appearance: none;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          cursor: pointer;
          background: var(--secondary);
        }

        .progressbar-fill {
          height: 3px;
          position: relative;
          pointer-events: none;
          background: var(--secondary);
          transform: translateY(calc(-100% - 4px));
          width: 0;
        }

        .slider::-webkit-slider-runnable-track {
          -webkit-appearance: none;
        }

        .progress-time {
          margin: 0.5rem 0;
          display: flex;
          justify-content: space-between;
          color: var(--primary-40);
          font-size: var(--font-xs);
        }
        @media screen and (min-width: 1024px) {
          .slider::-webkit-slider-thumb {
            opacity: 0;
          }
          .slider:hover::-webkit-slider-thumb,
          .slider:focus::-webkit-slider-thumb {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
