import Link from 'next/link'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import Description from 'components/ui/Description'
import CardInfo from '@components/episodes/EpisodeCard/CardInfo'
import IconAudioPlaying from 'components/ui/icons/IconAudioPlaying'
import { usePlayer } from 'lib/hooks/use-player'
import cn from 'classnames'

type Props = {
  clip: TEpisode
  isActive: boolean
  info: string
}

const EpisodeCard = ({ clip, isActive = false, info = null }: Props) => {
  const { isPlaying } = usePlayer()

  return (
    <Link href={`/episodes/${clip.id}`}>
      <a className={cn('episode', { ['active']: isActive })}>
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

        {isActive && isPlaying && (
          <span>
            <IconAudioPlaying fill={'var(--primary)'} />
          </span>
        )}

        <style jsx>{`
          .episode {
            display: block;
            text-decoration: none;
            margin: 0;
            padding: 1rem 0.25rem;
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: 1px solid var(--primary-20);
          }
          .episode:hover {
            background: var(--primary-05);
          }
          .active {
            margin: -0.5rem;
            background: var(--primary-05);
            border-bottom: 0;
            border-radius: 20px;
            padding: 1rem 3.75rem 1rem 1rem;
            position: relative;
          }
          h2 {
            margin: 0.8rem 0;
            font-size: var(--font-md);
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
            right: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
          }
          .meta {
            font-weight: bold;
            margin-top: 0.75rem;
            font-size: var(--font-xs);
          }
          @media screen and (min-width: 720px) {
            .episode {
              padding: 1rem;
            }
            .episode.active {
              padding: 1rem 6rem 1rem 1.5rem;
            }
            .active span {
              right: 2.5rem;
            }
          }
        `}</style>
      </a>
    </Link>
  )
}

export default EpisodeCard
