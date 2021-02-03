import Link from 'next/link'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import Description from 'components/ui/Description'
import CardInfo from 'components/ui/CardInfo'
import IconAudioPlaying from 'components/ui/icons/IconAudioPlaying'
import { usePlayer } from 'lib/hooks/use-player'

type Props = {
  clip: TEpisode
  isActive: boolean
  info: string
}

const EpisodeCard = ({ clip, isActive = false, info = null }: Props) => {
  const { isPlaying } = usePlayer()
  return (
    <Link href="/episodes/[episodeId]" as={`/episodes/${clip.id}`}>
      <a className={`episode ${isActive ? 'active' : ''}`}>
        <h2>{clip.title}</h2>

        {info ? (
          <div className="meta">{info}</div>
        ) : (
          <Description content={clip.description} />
        )}

        <CardInfo
          data={[
            getFormattedDate(clip.uploaded_at),
            getDurationOnMin(clip.duration),
          ]}
        />

        {isActive && (
          <span>{isPlaying && <IconAudioPlaying fill={'var(--black)'} />}</span>
        )}

        <style jsx>{`
          .episode {
            border-bottom: 1px solid var(--gray-20);
          }
          .active {
            background: var(--gray-15);
          }
          .episode:hover {
            background: var(--gray-15);
          }
        `}</style>

        <style jsx>{`
          .episode {
            display: block;
            text-decoration: none;
            margin: 0;
            padding: 16px 0.3rem;
            cursor: pointer;
            transition: 0.2s;
          }
          .active {
            margin: -0.5rem;
            border-bottom: 0;
            border-radius: 20px;
            padding: 16px 3.5rem 16px 1rem;
            position: relative;
          }
          h2 {
            margin: 0.8rem 0;
            font-size: 16px;
          }
          .active p,
          .active h2 {
            width: 80%;
          }
          .active h2 {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .active span {
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
          }
          .meta {
            font-weight: bold;
            margin-top: 0.7rem;
            font-size: 0.8rem;
          }
          @media screen and (min-width: 720px) {
            .episode {
              padding: 16px 1rem;
            }
            .episode.active {
              padding: 16px 5rem 16px 1.5rem;
            }
          }
        `}</style>
      </a>
    </Link>
  )
}

export default EpisodeCard
