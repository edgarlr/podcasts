import { getFormattedDate } from '@lib/utils/dateFormatter'
import { getDurationOnMin } from '@lib/utils/durationToMinutes'
import Link from 'next/link'
import React from 'react'
import cn from 'classnames'
import TranslucentImage from './ui/TranslucentImage'
import PlayButton from './PlayButton'
import IconButton from './ui/IconButton'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

type HeroCardProps = {
  episode: TEpisode
  index: number
  listLength: number
}

const HeroCard = ({ episode, index, listLength }: HeroCardProps) => {
  console.log()
  return (
    <div className="card-container">
      <div className="image-container">
        <TranslucentImage
          url={episode.urls?.image || episode.channel.urls.logo_image.original}
          alt={`${episode.title} cover`}
          width={200}
          height={200}
        />
      </div>

      <div className="info-container">
        <div className="arrows">
          <IconButton disabled={index === 0} ariaLabel="Prev Episode">
            <ArrowLeft width={28} height={28} />
          </IconButton>
          <IconButton
            disabled={index + 1 === listLength}
            ariaLabel="Prev Episode"
          >
            <ArrowRight width={28} height={28} />
          </IconButton>
        </div>
        <Link href={`/channels/${episode.channel.id}`}>
          <a className="channel-title">{episode.channel.title}</a>
        </Link>
        <h1
          className={cn('title', {
            ['md']: episode.title.length < 80 && episode.title.length >= 60,
            ['lg']: episode.title.length < 60 && episode.title.length >= 40,
            ['xl']: episode.title.length < 40,
          })}
        >
          {episode.title}
        </h1>
        {episode.description && (
          <p className="description">{episode.description}</p>
        )}

        <p className="info">{`${getFormattedDate(
          episode.uploaded_at
        )} · ${getDurationOnMin(episode.duration)}`}</p>
        <PlayButton episode={episode} channelId={episode.channel.id} />
      </div>

      <style jsx>{`
        .card-container {
          padding: 2.5rem 0;
        }
        .info-container {
          width: 100%;
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
        }
        .image-container {
          margin: 0 auto;
          width: max-content;
        }
        .arrows {
          display: flex;
          justify-content: center;
          padding: 1rem 0;
        }
        .channel-title {
          margin: 0;
          font-weight: bold;
          font-size: var(--font-md);
          color: var(--primary-60);
        }
        .title {
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
          color: var(--gray-60);
          font-size: var(--font-md);
          padding: 0;
          margin: 0.5rem 0;
          overflow: hidden;
          line-height: 1.25;
          position: relative;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .info {
          font-weight: bold;
          margin: 0.5rem 0 1.75rem;
          text-transform: uppercase;
          font-size: var(--font-xs);
          color: var(--primary-60);
        }
      `}</style>
    </div>
  )
}

const Hero = ({ episodes }: { episodes: TEpisode[] }) => {
  if (!episodes || episodes.length === 0) return null

  return (
    <section>
      {episodes.map((episode, index) => (
        <HeroCard
          episode={episode}
          index={index}
          listLength={episodes.length}
          key={episode.id}
        />
      ))}
    </section>
  )
}

export default Hero
