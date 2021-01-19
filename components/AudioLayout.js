import React from 'react'
import PlayerModal from './player/Player'

const AudioLayout = ({ children }) => {
  return (
    <>
      {children}
      <PlayerModal />
    </>
  )
}

export default AudioLayout
