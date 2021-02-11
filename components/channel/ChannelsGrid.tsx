import SectionTitle from 'components/SectionTitle'
import Grid from 'components/ui/Grid'
import { CSSProperties } from 'react'
import { PodcastCover } from './PodcastCover'
import PodcastCoverSkeleton from './PodcastCoverSkeleton'

type Props = {
  title: string
  channels: TChannel[]
  sectionButton?: React.ReactNode
  loading?: boolean
  style?: CSSProperties
}

export const ChannelsGrid = ({
  title,
  channels = [],
  sectionButton = null,
  loading = false,
  style = {},
}: Props) => {
  if (!loading && (!channels || channels.length === 0)) return null

  return (
    <section style={style}>
      <SectionTitle title={title} button={sectionButton} />
      <Grid>
        {loading
          ? [1, 2, 3, 4, 5, 6].map((card) => (
              <PodcastCoverSkeleton key={card} />
            ))
          : channels.map((channel, index) => (
              // Cases when API responses with the same element twice.
              <PodcastCover channel={channel} key={`${channel.id}${index}`} />
            ))}
      </Grid>
    </section>
  )
}
