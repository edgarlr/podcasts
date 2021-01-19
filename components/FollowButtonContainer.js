import { useState } from 'react'
import { useFavs } from 'lib/contexts'
import { useLocalStorage } from 'lib/hooks'
import Button from './ui/Button'
import { channelPropType } from 'lib/customPropTypes'

const FollowButtonContainer = ({ channel }) => {
  const { myList, Follow, Unfollow } = useFavs()
  const [isFollowed, setIsFollowed] = useState(
    myList.some((item) => item.id === channel.id)
  )
  const [, setLocalStorage] = useLocalStorage('favs', [])

  const handleFollowClick = () => {
    if (!isFollowed) {
      Follow(channel)
      setIsFollowed(true)
      setLocalStorage(myList)
    } else {
      Unfollow(channel)
      setIsFollowed(false)
      setLocalStorage(myList)
    }
  }

  return (
    <Button
      onClick={handleFollowClick}
      variant={isFollowed ? 'secondary' : 'primary'}
      ariaLabel="Follow this channel"
    >
      {isFollowed ? 'Following' : 'Follow'}
    </Button>
  )
}

export default FollowButtonContainer

FollowButtonContainer.propTypes = {
  channel: channelPropType,
}
