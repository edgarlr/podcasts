import { useReducer } from 'react';
import { PlayerContext } from 'contexts'
import { PlayerReducer } from './PlayerReducer'
import { SET_CURRENT_INDEX, SET_PLAYLIST, SET_LOADING } from './types';

export const PlayerState = (props) => {
  const initialState = {
    currentIndex: null,
    playlist: [],
    loading: true, 
  }

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const SetLoading = loading => dispatch({type: SET_LOADING, data: loading })
  const SetCurrentIndex = index => dispatch({type: SET_CURRENT_INDEX, data: index })
  const SetPlaylist = playlistArray => dispatch({type: SET_PLAYLIST, data: playlistArray})

  const prevSong = () => {
    if (state.currentIndex === 0) {
      return;
    } else {
      // SetLoading(true)
      SetCurrentIndex(state.currentIndex - 1)
      return;
    }
  }

  const nextSong = () => {
    if (state.currentIndex === state.playlist.length) {
      return;
    } else {
      // SetLoading(true)
      SetCurrentIndex(state.currentIndex + 1)
      return;
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentIndex: state.currentIndex,
        playlist: state.playlist,
        loading: state.loading,
        SetCurrentIndex,
        SetPlaylist,
        SetLoading,
        prevSong,
        nextSong,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
}
