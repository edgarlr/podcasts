import {
  usePlayer,
  usePlayerControls,
  usePlayerCurrentTime,
} from 'lib/hooks/use-player'

const AudioElement = () => {
  const { setIsPlaying, setLoading, setDuration, setAudioRef } = usePlayer()
  const { setCurrentTime } = usePlayerCurrentTime()
  const { nextEpisode } = usePlayerControls()

  return (
    <audio
      ref={setAudioRef}
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
      // crossOrigin="anonymous"
    />
  )
}

export default AudioElement
