import { createContext, useContext } from 'react'

type FavsContextProps = {
  favs: TChannel[]
  addToFavs: (channel: TChannel) => void
  removeFromFavs: (channel: TChannel) => void
}

export const FavsContext = createContext<FavsContextProps | null>(null)

export const useFavs = (): FavsContextProps => {
  const result = useContext(FavsContext)

  if (!result) {
    throw new Error()
  }

  return result
}
