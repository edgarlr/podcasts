import {useReducer} from 'react';
import {PlayerContext} from './PlayerContext'
import {PlayerReducer} from './PlayerReducer'

import {
  SET_CURRENT_SONG,
  SET_CURRENT_INDEX,
  SET_PLAYLIST,
  SET_LOADING,
} from './types';

export const PlayerState = (props) => {
  const initialState = {
    currentIndex: null,
    currentSong: 0,
    playlist: [],
    loading: true, 
  }

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const SetLoading = loading => dispatch({type: SET_LOADING, data: loading})

  const SetCurrent = currentSong => dispatch({type: SET_CURRENT_SONG, data: currentSong })

  const SetCurrentIndex = index => dispatch({type: SET_CURRENT_INDEX, data: index })

  const SetPlaylist = playlistArray => dispatch({type: SET_PLAYLIST, data: playlistArray})


  const prevSong = () => {
    if (state.currentIndex === 0) {
      return;
    } else {
      SetLoading(true)
      SetCurrentIndex(state.currentIndex - 1)
      SetCurrent(state.playlist[state.currentIndex - 1])
      SetLoading(false)
    }
  }

  const nextSong = () => {
    if (state.currentIndex === state.playlist.length) {
      return;
    } else {
      SetLoading(true)
      SetCurrentIndex(state.currentIndex + 1)
      SetCurrent(state.playlist[state.currentIndex + 1])
      return SetLoading(false)
      
    }
  };
  
  return (
    <PlayerContext.Provider
      value={{
        currentIndex: state.currentIndex,
        currentSong: state.currentSong,
        playlist: state.playlist,
        loading: state.loading,
        SetCurrentIndex,
        SetCurrent,
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
