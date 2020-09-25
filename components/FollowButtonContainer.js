import { useState } from 'react';
import { useFavs } from 'lib/contexts';
import { useLocalStorage } from 'lib/hooks';
import Button from './Button';

const FollowButtonContainer = ({ channel }) => {
  const { myList, Follow, Unfollow } = useFavs();
  const [isFollowed, setIsFollowed] = useState(
    myList.some((item) => item.id === channel.id)
  );
  const [, setLocalStorage] = useLocalStorage('favs', []);

  const handleFollowClick = (follow) => {
    if (!follow) {
      Follow(channel);
      setIsFollowed(true);
      setLocalStorage(myList);
    } else {
      Unfollow(channel);
      setIsFollowed(false);
      setLocalStorage(myList);
    }
  };

  return (
    <Button handleClick={handleFollowClick} isActive={isFollowed}>
      {isFollowed ? 'Following' : 'Follow'}
    </Button>
  );
};

export default FollowButtonContainer;
