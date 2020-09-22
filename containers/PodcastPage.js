import { useFetchPlaylist } from "hooks/useFetchPlaylist"
import Layout from "components/Layout"
import MainTitle from "components/MainTitle"
import ImgTranslucent from "components/ImgTranslucent"
import { SectionTitle } from "components/SectionTitle"
import { durationToMinutes } from "utils/durationToMinutes"
import { dateFormatter } from "utils/dateFormatter"
import EpisodeList from "components/episodes/EpisodeList"
import DescriptionContainer from "components/DescriptionContainer"
import PlayButton from "components/PlayButton"

const PodcastPage = ({audio_clip}) => {
  const { channel } = audio_clip
  const { clientPlaylist, isLoading } = useFetchPlaylist(channel.id)

  return (
    <Layout
      navigation={true}
      headerText={audio_clip.title}
      pageTitle={audio_clip.title + ' | Podcasts'}
      button={ 
        <div style={{width: '3rem'}}>
          <ImgTranslucent url={audio_clip.urls.image || channel.urls.logo_image.original} />
        </div>
      }
    >
      <MainTitle title={audio_clip.title} subtitle={channel.title} linkTo={`/${channel.id}`} />

      <SectionTitle 
        title={`${dateFormatter(audio_clip.uploaded_at)} · ${durationToMinutes(audio_clip.duration)}`} 
        button={<PlayButton episodeId={audio_clip.id} channelId={channel.id} />}
      />
      
      <DescriptionContainer data={audio_clip.description}/>

      <SectionTitle title='More Episodes' />
      
      <EpisodeList audioClips={clientPlaylist} loading={isLoading}/>

    </Layout>
  )
}

export default PodcastPage
