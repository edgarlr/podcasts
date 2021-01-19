import PlayerModal from './player/Player'

const AudioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <PlayerModal />
    </>
  )
}

export default AudioLayout
