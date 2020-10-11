import { usePlayer } from 'lib/contexts';
import { useSharedState } from 'lib/hooks/useSharedState';
import { durationToMSS } from 'lib/utils';

export const ProgressBar = () => {
  const { duration, audioRef } = usePlayer();
  const [currentTime, setCurrentTime] = useSharedState('currentTime', 0);

  const handleProgress = (e) => {
    const compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audioRef.current.currentTime = compute;
  };

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
        <div>{durationToMSS(currentTime)}</div>
        <div>{durationToMSS(duration)}</div>
      </div>

      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          height: 4px;
          background-color: #5e5f5f;
          width: 100%;
          outline: none;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          margin-bottom: 1rem;
          position: relative;
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
  );
};
