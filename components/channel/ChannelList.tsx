import PodcastCoverSkeleton from './PodcastCoverSkeleton'
import ChannelCard from './ChannelCard'

type Props = {
  title: string
  channels: TChannel[]
  loading?: boolean
}

const ChannelsList = ({ title, channels = [], loading = false }: Props) => {
  if (!loading && channels.length === 0) return null

  return (
    <section>
      <h3>{title}</h3>
      <div>
        {loading
          ? [1, 2, 3, 4, 5, 6].map((card) => (
              <PodcastCoverSkeleton key={card} />
            ))
          : channels.map((channel, index) => (
              // Cases when API responses with the same element twice.
              <ChannelCard
                channel={channel}
                index={index}
                key={`${channel.id}${index}`}
              />
            ))}
      </div>
      <style jsx>{`
        h3 {
          font-size: 1rem;
        }
      `}</style>
    </section>
  )
}

export default ChannelsList
