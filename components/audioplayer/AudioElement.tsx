import { usePlayer } from 'lib/hooks/use-player'
// import { useSharedState } from 'lib/hooks/use-shared-state'
import { forwardRef } from 'react'

const AudioElement = forwardRef<HTMLAudioElement>((_, ref) => {
  const { setIsPlaying, setLoading, setDuration, nextEpisode } = usePlayer()

  // const [, setCurrentTime] = useSharedState<number>('/episodes/currentTime', 0)

  return (
    <audio
      ref={ref}
      onCanPlay={(e) => setDuration((e.target as HTMLAudioElement).duration)}
      onLoadStart={() => setLoading(true)}
      onPause={() => setIsPlaying(false)}
      onEnded={() => nextEpisode()}
      onPlaying={() => {
        setIsPlaying(true)
        setLoading(false)
      }}
      // onTimeUpdate={(e) => {
      //   setCurrentTime((e.target as HTMLAudioElement).currentTime)
      // }}
      src={null}
    />
  )
})

export default AudioElement
