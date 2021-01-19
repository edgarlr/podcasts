import { usePlayer } from 'lib/contexts'
import { useMediaControls, useSharedState } from 'lib/hooks'

const AudioElement = () => {
  const {
    SetIsPlaying,
    SetLoading,
    audioRef,
    duration,
    SetDuration,
  } = usePlayer()

  const [currentTime, setCurrentTime] = useSharedState('currentTime', 0)
  const [, setProgress] = useSharedState('progress', 0)
  const { nextEpisode } = useMediaControls()

  return (
    <audio
      ref={audioRef}
      onCanPlay={(e) => SetDuration(e.target.duration)}
      onLoadStart={() => SetLoading(true)}
      onPause={() => SetIsPlaying(false)}
      onEnded={() => nextEpisode()}
      onPlaying={() => {
        SetIsPlaying(true)
        SetLoading(false)
      }}
      onTimeUpdate={(e) => {
        setCurrentTime(e.target.currentTime)
        setProgress((currentTime * 100) / duration)
      }}
      src={null}
    />
  )
}

export default AudioElement
