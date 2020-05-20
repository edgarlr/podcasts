import {useReducer} from 'react';
import {PlayerContext} from './PlayerContext'
import {PlayerReducer} from './PlayerReducer'
import {
  SET_CURRENT_SONG,
  SET_CURRENT_SONG_INDEX,
  TOGGLE_PLAYING,
  SET_PLAYLIST,
  SET_LOADING,
} from './types';

export const PlayerState = props => {
  const initialState = {
    currentSong: 0,
    currentSongIndex: null,
    playlist: null,
    playing: false,
    audio: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const SetLoading = loading => dispatch({type: SET_LOADING, data: loading})

  const SetCurrent = currentSong => dispatch({type: SET_CURRENT_SONG, data: currentSong })

  const SetCurrentIndex = index => dispatch({type: SET_CURRENT_SONG_INDEX, data: index })

  const SetPlaylist = playlistArray => dispatch({type: SET_PLAYLIST, data: playlistArray})

  const togglePlaying = () => dispatch({type: TOGGLE_PLAYING, data: state.playing ? false : true})

  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrentIndex(0)
    } else {
      SetCurrentIndex(state.currentSongIndex - 1)
    }
    // console.log('hola');
    
  }

  const nextSong = () => {
    console.log('hola');
  };
  
  return (
    <PlayerContext.Provider
      value={{
        currentSong: state.currentSong,
        currentSongIndex: state.currentSongIndex,
        playlist: state.playlist,
        playing: state.playing,
        audio: state.audio,
        loading: state.loading,
        SetLoading,
        SetCurrent,
        SetCurrentIndex,
        SetPlaylist,
        prevSong,
        nextSong,
        togglePlaying,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
}
