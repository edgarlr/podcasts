import { FavsContext } from '@lib/hooks/use-favs'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

const FavsProvider = ({ children }: { children: React.ReactNode }) => {
  const [favs, setFavs] = useLocalStorage<TChannel[]>('favs', [])

  const addToFavs = (channel: TChannel) => {
    setFavs([...favs, channel])
  }

  const removeFromFavs = (channel: TChannel) => {
    setFavs(favs.filter((item: TChannel) => item.id !== channel.id))
  }

  return (
    <FavsContext.Provider value={{ addToFavs, removeFromFavs, favs }}>
      {children}
    </FavsContext.Provider>
  )
}

export default FavsProvider
