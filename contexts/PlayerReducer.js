import {
  SET_CURRENT_INDEX,
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
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.data,
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
