import { useFetchPlaylist } from 'lib/hooks';
import Layout from 'components/Layout';
import MainTitle from 'components/MainTitle';
import ImgTranslucent from 'components/ImgTranslucent';
import { SectionTitle } from 'components/SectionTitle';
import { durationToMinutes, dateFormatter } from 'lib/utils';
import DescriptionContainer from 'components/DescriptionContainer';
import PlayButton from 'components/PlayButton';
import EpisodeListContainer from 'components/episodes/EpisodeListContainer';
import { episodePropType } from 'lib/customPropTypes';

const PodcastPage = ({ episode }) => {
  const { channel } = episode;
  const { clientPlaylist, isLoading } = useFetchPlaylist(channel.id);

  return (
    <Layout
      navigation
      headerText={episode.title}
      pageTitle={episode.title + ' | Podcasts'}
      button={
        <ImgTranslucent
          url={episode.urls.image || channel.urls.logo_image.original}
          alt={episode.title}
          width="3rem"
          alt={episodes.title}
        />
      }
    >
      <MainTitle
        title={episode.title}
        subtitle={channel.title}
        linkTo={`/${channel.id}`}
      />

      <SectionTitle
        title={`${dateFormatter(episode.uploaded_at)} · ${durationToMinutes(
          episode.duration
        )}`}
        button={<PlayButton episodeId={episode.id} channelId={channel.id} />}
      />

      <DescriptionContainer data={episode.description} />

      <EpisodeListContainer
        title="More Episodes"
        loading={isLoading}
        episodes={clientPlaylist}
      />
    </Layout>
  );
};

export default PodcastPage;

PodcastPage.propTypes = {
  episode: episodePropType,
};
