import Layout from "components/Layout"
import MainTitle from "components/MainTitle"
import ImgTranslucent from "components/ImgTranslucent"
import { SectionTitle } from "components/SectionTitle"
import { durationToMinutes } from "utils/durationToMinutes"
import { dateFormatter } from "utils/dateFormatter"
import { usePlaylist } from "hooks/usePlaylist"
import EpisodeList from "components/EpisodeList"
import DescriptionContainer from "components/DescriptionContainer"
import PlayButton from "components/PlayButton"

const PodcastPage = ({audio_clip}) => {
  const { playlist, isLoading } = usePlaylist(audio_clip.channel.id)

  return (
    <Layout
      navigation={true}
      headerText={audio_clip.title}
      button={ 
        <div style={{width: '3rem'}}>
          <ImgTranslucent url={audio_clip.urls.image || audio_clip.channel.urls.logo_image.original} />
        </div>
      }
    >
      <MainTitle title={audio_clip.title} subtitle={audio_clip.channel.title} />

      <SectionTitle 
        title={`${dateFormatter(audio_clip.uploaded_at)} · ${durationToMinutes(audio_clip.duration)}`} 
        button={<PlayButton />}
      />
      
      <DescriptionContainer data={audio_clip.description}/>

      <SectionTitle title='More Episodes' />
      
      <EpisodeList audioClips={playlist} loading={isLoading}/>

    </Layout>
  )
}

export default PodcastPage
