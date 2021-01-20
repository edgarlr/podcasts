import {
  createContext,
  MutableRefObject,
  useContext,
  useReducer,
  useRef,
} from 'react'

interface PlayerStateProps {
  currentIndex: number | null
  current: TEpisode | null
  playlist: TEpisode[]
  loading: boolean
  isPlaying: boolean
  duration: number
}

interface PlayerContextProps extends PlayerStateProps {
  SetCurrentIndex: (index: PlayerStateProps['currentIndex']) => void
  SetPlaylist: (playlist: PlayerStateProps['playlist']) => void
  SetLoading: (loading: PlayerStateProps['loading']) => void
  SetIsPlaying: (isPlaying: PlayerStateProps['isPlaying']) => void
  SetDuration: (duration: PlayerStateProps['duration']) => void
  audioRef: MutableRefObject<HTMLAudioElement>
  audio: HTMLAudioElement | null
}

const PlayerContext = createContext<PlayerContextProps | null>(null)

export const usePlayer = () => useContext(PlayerContext)

const initialState: PlayerStateProps = {
  currentIndex: null,
  current: null,
  playlist: [],
  loading: true,
  isPlaying: false,
  duration: 0,
}

type ActionProps =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_DURATION'; payload: number }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'SET_PLAYLIST'; payload: TEpisode[] }
  | { type: 'SET_IS_PLAYING'; payload: boolean }

const PlayerReducer = (state: typeof initialState, action: ActionProps) => {
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

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const SetCurrentIndex = (index: PlayerStateProps['currentIndex']) =>
    dispatch({ type: 'SET_CURRENT_INDEX', payload: index })

  const SetPlaylist = (playlist: PlayerStateProps['playlist']) =>
    dispatch({ type: 'SET_PLAYLIST', payload: playlist })

  const SetLoading = (loading: PlayerStateProps['loading']) =>
    dispatch({ type: 'SET_LOADING', payload: loading })

  const SetIsPlaying = (isPlaying: PlayerStateProps['isPlaying']) =>
    dispatch({ type: 'SET_IS_PLAYING', payload: isPlaying })

  const SetDuration = (duration: PlayerStateProps['duration']) =>
    dispatch({ type: 'SET_DURATION', payload: duration })

  return (
    <PlayerContext.Provider
      value={{
        currentIndex: state.currentIndex,
        current: state.current,
        playlist: state.playlist,
        loading: state.loading,
        isPlaying: state.isPlaying,
        duration: state.duration,
        SetCurrentIndex,
        SetPlaylist,
        SetLoading,
        SetIsPlaying,
        SetDuration,
        audioRef,
        audio: audioRef?.current,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
