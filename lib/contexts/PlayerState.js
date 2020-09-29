import { useReducer, useRef } from 'react';
import { PlayerContext } from 'lib/contexts';
import { PlayerReducer } from './PlayerReducer';
import {
  SET_CURRENT_INDEX,
  SET_PLAYLIST,
  SET_LOADING,
  SET_IS_PLAYING,
  SET_DURATION,
} from './types';
import PropTypes from 'prop-types';

export const PlayerState = ({ children }) => {
  const initialState = {
    currentIndex: null,
    current: null,
    playlist: [],
    loading: true,
    isPlaying: false,
    duration: 0,
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
  const SetDuration = (duration) =>
    dispatch({ type: SET_DURATION, data: duration });

  const audioRef = useRef(null);

  return (
    <PlayerContext.Provider
      value={{
        currentIndex: state.currentIndex,
        current: state.current,
        playlist: state.playlist,
        loading: state.loading,
        isPlaying: state.isPlaying,
        duration: state.duration,
        audioRef,
        SetCurrentIndex,
        SetPlaylist,
        SetLoading,
        SetIsPlaying,
        SetDuration,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

PlayerState.propTypes = {
  children: PropTypes.element.isRequired,
};
