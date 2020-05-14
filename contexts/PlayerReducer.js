import {SET_CURRENT_SONG, TOGGLE_PLAYING} from './types'

export const PlayerReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.data,
        playing: true
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data
      }
    default:
      return state
  }
}
