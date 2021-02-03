import { usePlayer } from 'lib/hooks/use-player'
import { useSharedState } from 'lib/hooks/use-shared-state'
import { MutableRefObject } from 'react'

const AudioElement = ({
  forwadedRef,
}: {
  forwadedRef: MutableRefObject<HTMLAudioElement>
}) => {
  const {
    setIsPlaying,
    setLoading,
    duration,
    setDuration,
    nextEpisode,
  } = usePlayer()

  const [currentTime, setCurrentTime] = useSharedState<number>('currentTime', 0)
  const [, setProgress] = useSharedState<number>('progress', 0)

  return (
    <audio
      ref={forwadedRef}
      onCanPlay={(e) => setDuration((e.target as HTMLAudioElement).duration)}
      onLoadStart={() => setLoading(true)}
      onPause={() => setIsPlaying(false)}
      onEnded={() => nextEpisode()}
      onPlaying={() => {
        setIsPlaying(true)
        setLoading(false)
      }}
      onTimeUpdate={(e) => {
        setCurrentTime((e.target as HTMLAudioElement).currentTime)
        setProgress((currentTime * 100) / duration)
      }}
      src={null}
    />
  )
}

export default AudioElement
