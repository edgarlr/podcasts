import { PodcastCover } from "./PodcastCover";
import PodcastCoverSkeleton from "./PodcastCoverSkeleton";

export const ChannelsGrid = ({channels, loading}) => {
  return (
    <div className='grid'>
      
      {loading ? (
        [1,2,3,4,5,6].map((card) => (
          <PodcastCoverSkeleton key={card}/>
        ))
      ) : (
        channels.map((channel) => (
          <PodcastCover channel={channel} key={channel.id} />
        )) 
      )}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          grid-gap: 2rem .8rem;
          padding: 24px 0;
        }
      `}</style>
    </div>
  );
}
