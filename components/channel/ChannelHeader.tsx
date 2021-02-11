import Description from '@components/ui/Description'
import FollowButton from '@components/FollowButton'
import PageTitle from '@components/ui/PageTitle'
import TranslucentImage from '@components/ui/TranslucentImage'

const ChannelHeader = ({ channel }: { channel: TChannel }) => {
  return (
    <section className="channel-header">
      <TranslucentImage
        url={channel.urls.logo_image.original}
        alt={`${channel.title} cover`}
        width={150}
        height={150}
        shape="circle"
        style={{
          margin: '1rem auto',
        }}
      />
      <PageTitle
        title={channel.title}
        subtitle={channel.parent_channel_id && 'Serie'}
        className="channelTitle"
      />

      <FollowButton channel={channel} />

      {channel.description.length > 100 && (
        <Description
          content={channel.description}
          style={{ marginTop: '2rem' }}
        />
      )}

      <style jsx>{`
        .channel-header {
          margin: 1rem 0;
        }
        .channel-header > :global(.channelTitle) {
          text-align: center;
          margin: 1.5rem 0;
        }
      `}</style>
    </section>
  )
}

export default ChannelHeader
