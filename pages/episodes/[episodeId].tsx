import { useRouter } from 'next/router'
import { getEpisodeById } from '@lib/api'
import { InferGetStaticPropsType } from 'next'
import Layout from 'components/common/Layout'
import MainTitle from 'components/MainTitle'
import TranslucentImage from '@components/ui/TranslucentImage'
import SectionTitle from 'components/SectionTitle'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import DescriptionContainer from 'components/DescriptionContainer'
import PlayButton from 'components/player/PlayButton'
import DynamicEpisodeList from '@components/episodes/DynamicEpisodeList'
import Custom404 from 'pages/404'

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const episode: TEpisode = await getEpisodeById(params.episodeId)
  // No props will trigger 404
  if (!episode) return { props: {} }
  return { props: { episode } }
}

export default function podcast({
  episode,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !episode) return <Custom404 />

  const { channel } = episode

  return (
    <Layout
      headerText={episode.title}
      pageTitle={`${episode.title} | Podcasts`}
      metaDescription={episode.description}
    >
      <div className="title-container">
        <TranslucentImage
          url={episode.urls?.image || channel.urls.logo_image.original}
          alt={`${episode.title} cover`}
          width={128}
          height={128}
        />
        <MainTitle
          title={episode.title}
          subtitle={channel.title}
          linkTo={`/channels/${channel.id}`}
        />
        <PlayButton episode={episode} channelId={channel.id} />
      </div>

      <SectionTitle
        title={`${getFormattedDate(episode.uploaded_at)} · ${getDurationOnMin(
          episode.duration
        )}`}
      />

      <DescriptionContainer content={episode.description} />

      <DynamicEpisodeList channel={channel} />

      <style jsx>{`
        .title-container {
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          grid-gap: 1rem;
          position: relative;
        }
        .title-container > :global(div:nth-child(2)) {
          margin-top: 0rem;
        }
        @media screen and (min-width: 768px) {
          .title-container {
            grid-template-columns: 1fr 2.5fr;
          }
          .title-container > :global(button) {
            bottom: 4rem;
            left: 30%;
          }
        }
        @media screen and (min-width: 1024px) {
          .title-container {
            grid-template-columns: 1fr 4fr;
            grid-gap: 2rem;
          }
          .title-container > :global(button) {
            left: 23%;
          }
        }
      `}</style>
    </Layout>
  )
}
