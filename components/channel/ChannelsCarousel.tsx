import CarouselGrid from 'components/ui/CarouselGrid'
import SectionTitle from 'components/SectionTitle'
import { PodcastCover } from './PodcastCover'
import PodcastCoverSkeleton from './PodcastCoverSkeleton'
import { CSSProperties } from 'react'

type Props = {
  title: string
  channels: TChannel[]
  sectionButton?: React.ReactNode
  loading?: boolean
  style?: CSSProperties
}

export const ChannelsCarousel = ({
  title,
  channels = [],
  sectionButton = null,
  loading = false,
  style = {},
}: Props) => {
  if (!loading && channels.length === 0) return null

  return (
    <section className="section-carousel" style={style}>
      {/* <SectionTitle title={title} button={sectionButton} /> */}
      <h3>{title}</h3>
      <CarouselGrid>
        {loading
          ? [1, 2, 3].map((card) => <PodcastCoverSkeleton key={card} />)
          : channels.map((channel, index) => (
              // For the cases where the api response width the same element twice
              <PodcastCover channel={channel} key={`${channel.id}${index}`} />
            ))}
      </CarouselGrid>

      <style jsx>{`
        .section-carousel {
          padding: 1.5rem 0;
        }
        .section-carousel h3 {
          margin-top: 0;
          font-size: var(--font-2xl);
          text-transform: capitalize;
        }
      `}</style>
    </section>
  )
}
