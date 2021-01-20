import { createContext, useContext } from 'react'

export const PlayerContext = createContext<TPlayerContext | null>(null)
export const usePlayer = () => useContext(PlayerContext)

export const FavsContext = createContext(null)
export const useFavs = () => useContext(FavsContext)
