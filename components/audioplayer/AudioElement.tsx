import { usePlayer } from 'lib/hooks/use-player'
import { useSharedState } from 'lib/hooks/use-shared-state'
import { MutableRefObject } from 'react'

const AudioElement = ({
  forwadedRef,
}: {
  forwadedRef: MutableRefObject<HTMLAudioElement>
}) => {
  const { setIsPlaying, setLoading, setDuration, nextEpisode } = usePlayer()

  const [, setCurrentTime] = useSharedState<number>('currentTime', 0)

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
      }}
      src={null}
    />
  )
}

export default AudioElement
