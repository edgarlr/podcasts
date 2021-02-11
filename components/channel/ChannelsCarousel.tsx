import CarouselGrid from 'components/ui/CarouselGrid'
import SectionTitle from 'components/SectionTitle'
import { PodcastCover } from './PodcastCover'
import PodcastCoverSkeleton from './PodcastCoverSkeleton'
import { CSSProperties } from 'react'
import cn from 'classnames'

type Props = {
  title: string
  channels: TChannel[]
  sectionButton?: React.ReactNode
  loading?: boolean
  style?: CSSProperties
  className?: string
}

export const ChannelsCarousel = ({
  title,
  channels = [],
  sectionButton = null,
  loading = false,
  style = {},
  className = '',
}: Props) => {
  if (!loading && (!channels || channels.length === 0)) return null

  return (
    <section className={cn('section-carousel', className)} style={style}>
      <SectionTitle title={title} button={sectionButton} />
      <CarouselGrid>
        {loading
          ? [1, 2, 3].map((card) => <PodcastCoverSkeleton key={card} />)
          : channels.map((channel, index) => (
              // Use the index as key for the cases where the api response width the same element twice
              <PodcastCover channel={channel} key={`${channel.id}${index}`} />
            ))}
      </CarouselGrid>

      <style jsx>{`
        .section-carousel {
          padding: 1.5rem 0;
        }
        .section-carousel > :global(:first-child) {
          margin-bottom: 1.5rem;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
      `}</style>
    </section>
  )
}
