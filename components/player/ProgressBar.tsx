import { usePlayer } from 'lib/hooks/use-player'
import { useSharedState } from '@lib/hooks/use-shared-state'
import { getDurationInMSS } from 'lib/utils/durationToMSS'

export const ProgressBar = () => {
  const { duration, updateTime } = usePlayer()
  const [currentTime, setCurrentTime] = useSharedState<number>(
    '/episodes/currentTime',
    0
  )

  const handleProgress = (e: any) => {
    const compute = (e.target.value * duration) / 100
    setCurrentTime(compute)
    updateTime(compute)
  }

  return (
    <div>
      <input
        onChange={handleProgress}
        value={currentTime ? (currentTime * 100) / duration : 0}
        type="range"
        name="progressbar"
        id="pgrbar"
        className="slider"
      />

      <div className="progress-time">
        <div>{getDurationInMSS(currentTime)}</div>
        <div>{getDurationInMSS(duration)}</div>
      </div>

      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          height: 3px;
          background-color: #5e5f5f;
          width: 100%;
          outline: none;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          margin-bottom: 1rem;
          position: relative;
          cursor: pointer;
          transition: height 0.15s;
        }
        .slider:hover {
          height: 5px;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-progress-appearance: none;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 4px solid #131414;
          cursor: pointer;
          background: #fff;
        }

        .progressbar-fill {
          height: 4px;
          position: relative;
          background: rgb(104, 252, 46);
          transform: translateY(calc(-1rem - 4px));
        }

        .slider::-webkit-slider-runnable-track {
          -webkit-appearance: none;
        }

        .progress-time {
          display: flex;
          justify-content: space-between;
          color: #979797;
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}
