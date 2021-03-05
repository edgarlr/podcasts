import { FavsContext } from '@lib/hooks/use-favs'
import { useLocalStorage } from '@lib/hooks/use-local-storage'
import { useCallback } from 'react'

const FavsProvider = ({ children }: { children: React.ReactNode }) => {
  const [favs, setFavs] = useLocalStorage<TChannel[]>('favs', [])

  const addToFavs = useCallback(
    (channel: TChannel) => {
      setFavs([...favs, channel])
    },
    [favs, setFavs]
  )

  const removeFromFavs = useCallback(
    (channel: TChannel) => {
      setFavs(favs.filter((item: TChannel) => item.id !== channel.id))
    },
    [favs, setFavs]
  )

  return (
    <FavsContext.Provider value={{ addToFavs, removeFromFavs, favs }}>
      {children}
    </FavsContext.Provider>
  )
}

export default FavsProvider
