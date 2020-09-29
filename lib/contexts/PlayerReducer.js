import {
  SET_CURRENT_INDEX,
  SET_PLAYLIST,
  SET_LOADING,
  SET_IS_PLAYING,
  SET_DURATION,
} from './types';

export const PlayerReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.data,
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.data,
        current: state.playlist[action.data],
      };
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.data,
      };
    case SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.data,
      };
    default:
      return state;
  }
};
