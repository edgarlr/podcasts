import {useReducer} from 'react';
import {PlayerContext} from './PlayerContext'
import {PlayerReducer} from './PlayerReducer'
import {SET_CURRENT_SONG, TOGGLE_PLAYING} from './types'


export const PlayerState = props => {
  const initialState = {
    currentSong: 0,
    // songs: songsArr,
    playing: false,
    audio: null,
  }

  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  const togglePlaying = () => dispatch({type: TOGGLE_PLAYING, data: state.playing ? false : true})

  const SetCurrent = id => dispatch({type: SET_CURRENT_SONG, data: id })
  
  
  return (
    <PlayerContext.Provider 
      value={{ 
        currentSong: state.currentSong,
        playing: state.playing,
        audio: state.audio,
        SetCurrent,
        togglePlaying,

      }}>
      {props.children}
    </PlayerContext.Provider>
  );
}
