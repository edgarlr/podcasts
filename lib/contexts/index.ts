import { createContext, useContext } from 'react'

export const PlayerContext = createContext<TPlayerContext | null>(null)
export const usePlayer = () => useContext(PlayerContext)
