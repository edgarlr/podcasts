import { useState, useEffect, useContext } from 'react';
import {FavsContext} from 'contexts/FavsContext'
import { useLocalStorage } from 'hooks/useLocalStorage';
import MainTitle from 'components/MainTitle';
import Navbar from 'components/Navbar';
import PodcastCover from 'components/PodcastCover';
import Layout from 'components/Layout';
import EpisodeList from 'components/EpisodeList';
import GridCarousel from 'components/GridCarousel';
import { SectionTitle } from 'components/SectionTitle';
import BannerImage from 'components/BannerImage';
import { colors } from 'styles/theme';

const ChannelPage = ({channel, audioClips, series }) => {
  const {myList, Follow, Unfollow } = useContext(FavsContext)
  const [bannerImage, setBannerImage] = useState({})
  const [isFollowed, setIsFollowed] = useState(false)
  const [, setLocalStorage] = useLocalStorage('favs', [])

  useEffect(() => {  
    if (channel.urls.banner_image.original === null) {
      setBannerImage(channel.urls.logo_image.original);
    } else {
      setBannerImage(channel.urls.banner_image.original)
    }

    for (let i = 0; i < myList.length; i++) {
      if (myList[i].id == channel.id) {
        setIsFollowed(true)
        break;
      }
    }

    setLocalStorage(myList)
  }, [myList])

  const handleFollowClick = () => {
    Follow(channel)
  }
  const handleUnfollowClick = () => {    
    Unfollow(channel)
    setIsFollowed(false)
  };

  return (
    <Layout 
      header={
        <Navbar 
          headerText={channel.title}
          followed={isFollowed}
          handleFollowClick={handleFollowClick}
          handleUnfollowClick={handleUnfollowClick}
        />
      }
    >
      <MainTitle
        title={channel.title}
        serie={channel.parent_channel_id}
      />

      <BannerImage bannerImage={bannerImage} />

      {series.length > 0 && (
        <section>
          <SectionTitle title={`${channel.title}'S SERIES`} />
          <GridCarousel >
            {series.map((channel, index) => (
              <PodcastCover channel={channel} index={index} key={index}/>
            ))}
          </GridCarousel>
        </section>
      )}

      <EpisodeList audioClips={audioClips} />
      
      <style jsx>{`
        a.channel {
          color: ${colors.darkGray};
        }
      `}</style>

      <style jsx>{`
        .channels {
          display: grid;
          grid-gap: 10px;
          padding: 15px 36px;
          grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          width: 100%;
        }
        h1 {
          padding: 15px;
        }
      `}</style>
    </Layout>
  )
}

export default ChannelPage
