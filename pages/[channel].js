import 'isomorphic-fetch';
import Layout from '../components/Layout';
import EpisodeList from '../components/EpisodeList';
import PodcastGrid from '../components/PodcastGrid';
import Error from './_error';
import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import {FavsContext} from '../contexts/FavsContext'
import { useLocalStorage } from '../hooks/useLocalStorage';

export async function getServerSideProps(context) {
  let idChannel = context.query.channel;
  try {
    let [reqChannel, reqAudios, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}?version=2`),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/audio_clips?version=2`
      ),
      fetch(
        `https://api.audioboom.com/channels/${idChannel}/child_channels?version=2`
      ),
    ]);

    context.res.statusCode = reqChannel.status;

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudios = await reqAudios.json();
    let audioClips = dataAudios.body.audio_clips;

    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;

    return {
      props: {
        channel,
        audioClips,
        series,
        statusCode: context.res.statusCode,
      },
    };
  } catch (error) {
    return {
      props: {
        channel: null,
        audioClip: null,
        series: null,
        statusCode: context.res.statusCode,
      },
    };
  }
}

export default function channel({ channel, audioClips, series, statusCode }) {
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

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }


  const handleFollowClick = () => {
    Follow(channel)
  }
  const handleUnfollowClick = () => {    
    Unfollow(channel)
    setIsFollowed(false)
  };
  
  return (
    <Layout title={`${channel.title} | Podcast`}>
      <Header
        headerText={channel.title}
        nav={true}
        followed={isFollowed}
        handleFollowClick={handleFollowClick}
        handleUnfollowClick={handleUnfollowClick}
        serie={channel.parent_channel_id}
      />
      <div className='content'>
        <div
          className='banner'
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          <div
            className='banner-shadow'
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          />
        </div>

        {series.length > 0 && (
          <div>
            <PodcastGrid
              channels={series}
              title={`series de ${channel.title}`}
            />
          </div>
        )}

        <EpisodeList audioClips={audioClips} />
      </div>

      <style jsx>{`
        .content {
          padding: 0 1.5em;
        }
        .banner {
          margin: 24px 0 0;
          width: 100%;
          background-position: 50% 50%;
          height: 120px;
          border-radius: 20px;
          background-size: cover;
          background-color: #aaa;
          position: relative;
        }
        .banner-shadow {
          margin: 20px 0 0;
          position: absolute;
          width: 80%;
          background-position: 50% 50%;
          height: 105px;
          border-radius: 20px;
          background-size: cover;
          background-color: #aaa;
          filter: blur(15px);
          left: 50%;
          transform: translate(-50%);
          z-index: -1;
        }

        .channels {
          display: grid;
          grid-gap: 10px;
          padding: 15px 36px;
          grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
        }
        a.channel {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
          width: 100%;
        }
        h1 {
          font-weight: 600;
          padding: 15px;
        }
      `}</style>
    </Layout>
  );
}
