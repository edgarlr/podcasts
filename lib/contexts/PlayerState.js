import { useReducer } from 'react';
import { PlayerContext } from 'lib/contexts';
import { PlayerReducer } from './PlayerReducer';
import {
  SET_CURRENT_INDEX,
  SET_PLAYLIST,
  SET_LOADING,
  SET_IS_PLAYING,
} from './types';

export const PlayerState = (props) => {
  const initialState = {
    currentIndex: null,
    current: null,
    playlist: [],
    loading: true,
    isPlaying: false,
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const SetLoading = (loading) =>
    dispatch({ type: SET_LOADING, data: loading });
  const SetCurrentIndex = (index) =>
    dispatch({ type: SET_CURRENT_INDEX, data: index });
  const SetPlaylist = (playlistArray) =>
    dispatch({ type: SET_PLAYLIST, data: playlistArray });
  const SetIsPlaying = (isPlaying) =>
    dispatch({ type: SET_IS_PLAYING, data: isPlaying });

  return (
    <PlayerContext.Provider
      value={{
        currentIndex: state.currentIndex,
        current: state.current,
        playlist: state.playlist,
        loading: state.loading,
        isPlaying: state.isPlaying,
        SetCurrentIndex,
        SetPlaylist,
        SetLoading,
        SetIsPlaying,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
