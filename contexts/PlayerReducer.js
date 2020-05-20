import {
  SET_CURRENT_SONG, 
  SET_CURRENT_SONG_INDEX,
  TOGGLE_PLAYING, 
  SET_PLAYLIST,
  SET_LOADING,
} from './types'

export const PlayerReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: 
      return {
        ...state,
        loading: action.data,
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
      }
    case SET_CURRENT_SONG_INDEX:
      return {
        ...state,
        currentSongIndex: action.data,
        playing: true
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data
      }
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.data
      }
    default:
      return state
  }
}
