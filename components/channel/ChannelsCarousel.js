import CarouselGrid from "components/ui/CarouselGrid";
import { SectionTitle } from "components/SectionTitle";
import { PodcastCover } from "./PodcastCover";
import PodcastCoverSkeleton from "./PodcastCoverSkeleton";

export const ChannelsCarousel = (props) => {
  const { 
    title, 
    channels = [], 
    sectionButton = null, 
    loading = false 
  } = props

  if (!loading && channels.length === 0) return null

  return (
    <>
      <SectionTitle title={title} button={sectionButton} />
      <CarouselGrid>
        {loading 
          ? [1,2,3].map((card) => <PodcastCoverSkeleton key={card}/>)
          : channels.map((channel) => (
            <PodcastCover channel={channel} key={channel.id} />
          ))
        }
      </CarouselGrid>
    </>
  );
}
