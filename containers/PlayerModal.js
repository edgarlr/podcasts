import PlayerPortal from "components/PlayerPortal"
import { colors } from "styles/theme"
import MiniPlayer from "components/MiniPlayer"
import { useState } from "react"
import { Player } from "components/Player"

const PlayerModal = () => {
  const [fullView, setFullView] = useState(false)

  const handleModalClick = () => {
    setFullView(!fullView)
  }

  return (
    <>
      <PlayerPortal selector={'#player'} >
        <div className={fullView ? 'fullmodal' : ' '}>
          {fullView && <Player handleModalClick={handleModalClick}/>}
          {!fullView && <MiniPlayer handleModalClick={handleModalClick}/>}
        </div>
      </PlayerPortal>

      <style jsx>{`
        div {
          background: ${colors.black};
        }
      `}</style>

      <style jsx>{`
        div {
          z-index: 2;
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
          transition: .2s;
        }
        .fullmodal {
          height: 94vh;
        }
      `}</style>
    </>
  )
}

export default PlayerModal
