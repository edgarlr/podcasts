import { createContext, useContext } from 'react'

export type PlayerState = {
  currentIndex: number | null
  current: TEpisode | null
  playlist: TEpisode[]
  loading: boolean
  isPlaying: boolean
  duration: number
}

type PlayerContextProps = PlayerState & {
  setCurrentIndex: (index: PlayerState['currentIndex']) => void
  setPlaylist: (playlist: PlayerState['playlist']) => void
  setLoading: (loading: PlayerState['loading']) => void
  setIsPlaying: (isPlaying: PlayerState['isPlaying']) => void
  setDuration: (duration: PlayerState['duration']) => void
  nextEpisode: () => void
  prevEpisode: () => void
  toggleAudio: () => void
  play: (track: TEpisode) => void
  pause: () => void
  seekForward: (time: number) => void
  replay: (time: number) => void
  updateTime: (time: number) => void
}

export const PlayerContext = createContext<PlayerContextProps | null>(null)

export const usePlayer = (): PlayerContextProps => {
  const result = useContext(PlayerContext)
  if (!result) {
    throw new Error()
  }
  return result
}

export type PlayerActions =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DURATION'; payload: number }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'SET_PLAYLIST'; payload: TEpisode[] }
  | { type: 'SET_IS_PLAYING'; payload: boolean }

export const PlayerReducer = (
  state: PlayerState,
  action: PlayerActions
): PlayerState => {
  switch (action.type) {
    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: action.payload,
        current: state.playlist[action.payload],
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.payload,
      }
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      }
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload,
      }
    default:
      return state
  }
}
