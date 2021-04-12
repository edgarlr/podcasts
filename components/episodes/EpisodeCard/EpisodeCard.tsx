import Link from 'next/link'
import { getDurationOnMin } from 'lib/utils/durationToMinutes'
import { getFormattedDate } from 'lib/utils/dateFormatter'
import CardInfo from '@components/episodes/EpisodeCard/CardInfo'
import AnimatedLogo from '@components/icons/AnimatedLogo'
import { usePlayer } from 'lib/hooks/use-player'
import cn from 'classnames'

type Props = {
  clip: TEpisode
  info: string
}

const EpisodeCard = ({ clip, info = null }: Props) => {
  const { isPlaying, current } = usePlayer()

  const isActive = current && current.id === clip.id

  return (
    <Link href={`/episodes/${clip.id}`}>
      <a className={cn('episode', { ['active']: isActive })}>
        <h2>{clip.title}</h2>

        {info ? (
          <div className="info">{info}</div>
        ) : (
          <p className="description">{clip.description}</p>
        )}

        <CardInfo
          data={[
            getFormattedDate(clip.uploaded_at),
            getDurationOnMin(clip.duration),
          ]}
        />

        {isActive && isPlaying && (
          <span>
            <AnimatedLogo fill={'var(--primary)'} />
          </span>
        )}

        <style jsx>{`
          .episode {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            margin: 0;
            padding: 2rem 0.25rem;
            cursor: pointer;
            transition: background-color 0.2s;
            border-bottom: var(--default-border);
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
            margin: 0;
            font-size: var(--font-md);
            color: var(--primary-90);
          }
          .active p,
          .active h2 {
            width: 80%;
          }
          .active p,
          .active :global(p) {
            color: var(--primary-80);
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
          .description {
            color: var(--gray-60);
            font-size: var(--font-sm);
            padding: 0;
            margin: 0.75rem 0;
            overflow: hidden;
            line-height: 1.25;
            position: relative;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .info {
            font-weight: bold;
            margin: 0.75rem 0;
            font-size: var(--font-sm);
            color: var(--primary-80);
          }
          @media screen and (min-width: 720px) {
            .episode {
              padding: 2rem 1rem;
            }
            .episode.active {
              padding: 2rem 6rem 2rem 1.5rem;
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
