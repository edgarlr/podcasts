import AudioPlayerPortal from "components/AudioPlayerPortal"
import { colors } from "styles/theme"
import MiniPlayer from "components/MiniPlayer"
import { useState } from "react"

const Player = () => {
  const [fullView, setFullView] = useState(false)
  return (
    <>
      <AudioPlayerPortal selector={'#player'} >
        <div>
          <button />
          <MiniPlayer />
        </div>
      </AudioPlayerPortal>

      <style jsx>{`
        div {
          background: #131414;
          position: fixed;
          height: 6em;
          right: 0;
          left: 0;
          bottom: 0;
          margin: 0 -1px -1px -1px;
          border-radius: 20px 20px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 .8em;
        }
        button {
          background: #131414;
          outline: none;
          border: none;
          height: 6px;
          width: 30px;
          border-radius: 5px;

          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);

        }
      `}</style>
    </>
  )
}

export default Player
