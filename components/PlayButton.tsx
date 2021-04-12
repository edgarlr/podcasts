import { usePlayer, usePlayerControls } from 'lib/hooks/use-player'
import { getChannelEpisodesUrl } from 'lib/api'
import { useFetch } from 'lib/hooks/use-fetch'
import PlayArrow from 'components/icons/PlayArrow'
import Button from './ui/Button'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  episode: TEpisode
  channelId: TChannel['id']
}

const PlayButton = ({ episode, channelId, ...rest }: Props) => {
  const channelEpisodesUrl = getChannelEpisodesUrl(channelId)
  const { data: episodesData, isLoading } = useFetch<TEpisode[]>(
    channelEpisodesUrl,
    'audio_clips'
  )

  const { current, setCurrentIndex, setPlaylist } = usePlayer()

  const { play } = usePlayerControls()

  const isActive = current && current.id === episode.id

  const onPlayClick = () => {
    if (!episodesData) return
    setPlaylist(episodesData)
    for (let i = 0; i < episodesData.length; i++) {
      if (episodesData[i].id === episode.id) {
        setCurrentIndex(i)
        play(episodesData[i])
        break
      }
    }
  }

  return (
    <Button
      onClick={() => onPlayClick()}
      ariaLabel="Play Episode"
      disabled={isLoading || isActive}
      subfix={!isActive ? <PlayArrow /> : null}
      variant={!isActive ? 'primary' : 'secondary'}
      {...rest}
    >
      {isActive ? 'Playing' : 'Play'}
    </Button>
  )
}

export default PlayButton
