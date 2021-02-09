import { useToast } from '@lib/hooks/use-toast'
import { useFavs } from 'lib/hooks/use-favs'
import Button from './ui/Button'

const FollowButton = ({ channel }: { channel: TChannel }) => {
  const { favs, addToFavs, removeFromFavs } = useFavs()
  const { addToast } = useToast()

  const isOnFavs = favs.some((item: TChannel) => item.id === channel.id)

  const handleFollowClick = () => {
    if (isOnFavs) {
      addToast('Removed from Favorites')
      removeFromFavs(channel)
    } else {
      addToast('Added to Favorites')
      addToFavs(channel)
    }
  }

  return (
    <Button
      onClick={handleFollowClick}
      variant={isOnFavs ? 'secondary' : 'primary'}
      ariaLabel="Follow this channel"
      style={{
        margin: '0 auto',
      }}
    >
      {isOnFavs ? 'Following' : 'Follow'}
    </Button>
  )
}

export default FollowButton
