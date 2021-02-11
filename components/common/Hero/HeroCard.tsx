import { getFormattedDate } from '@lib/utils/dateFormatter'
import { getDurationOnMin } from '@lib/utils/durationToMinutes'
import Link from 'next/link'
import { MouseEvent } from 'react'
import cn from 'classnames'
import TranslucentImage from '@components/ui/TranslucentImage'
import IconButton from '@components/ui/IconButton'
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import PlayButton from '@components/PlayButton'

type HeroCardProps = {
  episode: TEpisode
  index: number
  listLength: number
  active: number
  onPrevClick: (e: MouseEvent) => void
  onNextClick: (e: MouseEvent) => void
}

const HeroCard = ({
  episode,
  index,
  listLength,
  active,
  onPrevClick,
  onNextClick,
}: HeroCardProps) => {
  const isActive = active === index
  return (
    <div className={cn('card-container', { ['active-card']: isActive })}>
      <Link href={`/episodes/${episode.id}`}>
        <div
          className={cn('image-container', {
            ['active-img']: isActive,
            ['rotate-img']: !isActive,
            ['hide']: index < active,
          })}
        >
          <TranslucentImage
            url={
              episode.urls?.image || episode.channel.urls.logo_image.original
            }
            alt={`${episode.title} cover`}
            width={200}
            height={200}
          />
        </div>
      </Link>

      <div className={cn('info-container', { ['active-info']: isActive })}>
        <div className="arrows">
          <IconButton
            onClick={onPrevClick}
            disabled={index === 0}
            ariaLabel="Prev Episode"
          >
            <ArrowLeft width={28} height={28} />
          </IconButton>
          <IconButton
            disabled={index + 1 === listLength}
            ariaLabel="Prev Episode"
            onClick={onNextClick}
          >
            <ArrowRight width={28} height={28} />
          </IconButton>
        </div>
        <Link href={`/channels/${episode.channel.id}`}>
          <a className="channel-title">{episode.channel.title}</a>
        </Link>
        <Link href={`/episodes/${episode.id}`}>
          <h1
            className={cn('title', {
              ['md']: episode.title.length < 80 && episode.title.length >= 60,
              ['lg']: episode.title.length < 60 && episode.title.length >= 40,
              ['xl']: episode.title.length < 40,
            })}
          >
            {episode.title}
          </h1>
        </Link>
        {episode.description && (
          <Link href={`/episodes/${episode.id}`}>
            <p className="description">{episode.description}</p>
          </Link>
        )}

        <p className="meta-info">{`${getFormattedDate(
          episode.uploaded_at
        )} · ${getDurationOnMin(episode.duration)}`}</p>
        <PlayButton episode={episode} channelId={episode.channel.id} />
      </div>

      <style jsx>{`
        .card-container {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: ${9 - index};
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }
        .active-card {
          z-index: 10;
        }
        .image-container {
          margin: 0 auto;
          width: max-content;
          transition: transform 0.2s;
          will-change: transform;
          cursor: pointer;
        }
        .card-container:nth-of-type(odd) .rotate-img {
          transform: ${`rotate(calc(3deg * ${index}))`};
        }

        .card-container:nth-of-type(even) .rotate-img {
          transform: ${`rotate(calc(-3deg * ${index}))`};
        }
        .active-img {
          transform: rotate(0deg);
          z-index: 100;
        }
        .info-container {
          width: 100%;
          align-self: flex-start;
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0;
          opacity: 0;
          transition: opacity 0.2s;
          will-change: opacity;
        }
        .active-info {
          opacity: 1;
        }
        .hide {
          visibility: hidden;
        }
        .arrows {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }
        .channel-title {
          margin: 0;
          font-weight: bold;
          font-size: var(--font-md);
          color: var(--primary-60);
        }
        .title {
          cursor: pointer;
          margin: 0.5rem 0;
          text-transform: capitalize;
          font-size: var(--font-lg);
        }
        .title.md {
          font-size: var(--font-xl);
        }
        .title.lg {
          font-size: var(--font-2xl);
        }
        .title.xl {
          font-size: var(--font-3xl);
        }
        .description {
          cursor: pointer;
          color: var(--gray-60);
          font-size: var(--font-sm);
          padding: 0;
          margin: 0.5rem 0;
          overflow: hidden;
          line-height: 1.25;
          position: relative;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .meta-info {
          font-weight: bold;
          margin: 0.5rem 0 1.75rem;
          text-transform: uppercase;
          font-size: var(--font-xs);
          color: var(--primary-60);
        }
        @media screen and (min-width: 426px) {
          .info-container {
            width: 80%;
            margin: 0 auto;
          }
        }
        @media screen and (min-width: 1024px) {
          .card-container {
            align-items: center;
            justify-content: space-between;
            flex-direction: row-reverse;
          }
          .info-container {
            width: 100%;
            margin: 0;
            padding-top: 4rem;
            flex: 0 0 60%;
          }
          .arrows {
            margin: 0 -0.75rem 1rem;
            justify-content: flex-start;
          }
          .image-container {
            margin: 0;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroCard
