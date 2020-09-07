import React, { useContext, useState } from 'react'
import Button from './Button'
import { FavsContext } from 'contexts/FavsContext'
import { useLocalStorage } from 'hooks/useLocalStorage'

const FollowButtonContainer = ({channel}) => {
  const {myList, Follow, Unfollow } = useContext(FavsContext)
  const [isFollowed, setIsFollowed] = useState(myList.some(item => item.id === channel.id))
  const [, setLocalStorage] = useLocalStorage('favs', [])

  const handleFollowClick = (follow) => {
    if(!follow) {
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
    <Button handleClick={handleFollowClick} isActive={isFollowed}>
      {isFollowed ? 'Following' : 'Follow'}
    </Button>
  )
}

export default FollowButtonContainer

