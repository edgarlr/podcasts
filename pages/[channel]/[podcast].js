import 'isomorphic-fetch';
import { useContext, useState, useEffect } from 'react';
import { PlayerContext } from 'contexts/PlayerContext';
import { useRouter } from 'next/router';
import { AudioPlayer } from 'components/AudioPlayer';

export async function getServerSideProps(context) {
  let idChannel = context.query.channel;

  let req = await fetch(
    `https://api.audioboom.com/channels/${idChannel}/audio_clips?version=2`
    );
    
  let data = await req.json()
  let audioClips = data.body.audio_clips;
  
  return {props: {audioClips}}
}

export default function podcast({ audioClips }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  const {
    SetCurrentIndex,
    SetPlaylist,
    SetCurrent,
    SetLoading,
    playlist,
  } = useContext(PlayerContext);

  useEffect(() => {
    const setContextState = async () => {
      if (playlist === null) {
        SetPlaylist(audioClips)
      }
      for (let i = 0; i < audioClips.length; i++) {
        if (router.query.podcast == audioClips[i].id) {
          await SetCurrentIndex(i)
          await SetCurrent(audioClips[i])
          setLoading(false)
        }
      }
    }
    setContextState()
  }, [])
  
  if (loading) {
    return <div className="modal">...</div>
  }
  
  return (
    <AudioPlayer />
  );
}
