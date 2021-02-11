import Forward30 from 'components/icons/Forward30'
import Replay30 from 'components/icons/Replay30'
import PlayArrow from 'components/icons/PlayArrow'

const FullPlayerSkeleton = () => {
  return (
    <div className="container">
      <div className="img-container opacityPulse" />

      <div className="info">
        <div className="title-text opacityPulse" />
        <div className="channel-text opacityPulse" />
      </div>

      <div className="main-player">
        <button disabled className="controller-button">
          <Replay30 width={40} height={40} />
        </button>
        <button disabled className="play-button">
          <PlayArrow width={44} height={44} />
        </button>
        <button disabled className="controller-button">
          <Forward30 width={40} height={40} />
        </button>
      </div>
      <div>
        <div className="progress-bar opacityPulse" />
        <div className="progress-time">
          <div>00:00</div>
          <div>00:00</div>
        </div>
      </div>

      <style jsx>{`
        .progress-bar,
        .img-container,
        .title-text,
        .channel-text {
          background: var(--primary-90);
        }
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          width: 75%;
          margin: 0 auto;
          height: 75%;
        }
        .img-container {
          width: 80%;
          max-width: 200px;
          padding-bottom: 80%;
          margin: 0 auto;
          border-radius: 15px;
        }
        .info {
          width: 100%;
          margin: 0 auto;
        }
        .title-text {
          margin: 10px auto;
          height: 14px;
          width: 100%;
        }
        .channel-text {
          margin: 16px auto;
          height: 16px;
          width: 60%;
        }
        button[disabled] {
          outline: none;
          opacity: 0.3;
        }
        button {
          color: var(--secondary);
        }
        .main-player {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 2rem 0;
        }
        .controller-button {
          background: none;
          border: none;
        }
        .play-button {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: none;
          border: 1px solid var(--white);
        }
        .progress-bar {
          width: 100%;
          height: 4px;
          margin-bottom: 1rem;
        }
        .progress-time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: var(--primary-50);
        }
      `}</style>
    </div>
  )
}

export default FullPlayerSkeleton
