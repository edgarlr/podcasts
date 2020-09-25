import { useFetchPlaylist } from 'hooks/useFetchPlaylist';
import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import ImgTranslucent from 'components/ImgTranslucent';
import { SectionTitle } from 'components/SectionTitle';
import { durationToMinutes } from 'utils/durationToMinutes';
import { dateFormatter } from 'utils/dateFormatter';
import DescriptionContainer from 'components/DescriptionContainer';
import PlayButton from 'components/PlayButton';
import EpisodeListContainer from 'components/episodes/EpisodeListContainer';

const PodcastPage = ({ episodes }) => {
  const { channel } = episodes;
  const { clientPlaylist, isLoading } = useFetchPlaylist(channel.id);

  return (
    <Layout
      navigation={true}
      headerText={episodes.title}
      pageTitle={episodes.title + ' | Podcasts'}
      button={
        <ImgTranslucent
          url={episodes.urls.image || channel.urls.logo_image.original}
          width="3rem"
        />
      }
    >
      <MainTitle
        title={episodes.title}
        subtitle={channel.title}
        linkTo={`/${channel.id}`}
      />

      <SectionTitle
        title={`${dateFormatter(episodes.uploaded_at)} · ${durationToMinutes(
          episodes.duration
        )}`}
        button={<PlayButton episodeId={episodes.id} channelId={channel.id} />}
      />

      <DescriptionContainer data={episodes.description} />

      <EpisodeListContainer
        title="More Episodes"
        loading={isLoading}
        episodes={clientPlaylist}
      />
    </Layout>
  );
};

export default PodcastPage;
