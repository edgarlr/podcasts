import { useReducer } from 'react'
import { FavsContext } from 'lib/contexts'
import { ADD_TO_FOLLOW, REMOVE_FROM_FOLLOW } from './types'
import { FavsReducer } from './FavsReducer'
import { useLocalStorage } from 'lib/hooks/use-local-storage'

export const FavsState = ({ children }) => {
  const [favs] = useLocalStorage('favs', undefined)

  const empyArr = []
  const initialValue = () => {
    if (favs !== undefined) {
      return favs
    }
    return empyArr
  }

  const initialState = {
    myList: initialValue(),
  }

  const [state, dispatch] = useReducer(FavsReducer, initialState)

  const Follow = (channel) => dispatch({ type: ADD_TO_FOLLOW, data: channel })

  const Unfollow = (channel) =>
    dispatch({ type: REMOVE_FROM_FOLLOW, data: channel })

  return (
    <FavsContext.Provider
      value={{
        myList: state.myList,
        Follow,
        Unfollow,
      }}
    >
      {children}
    </FavsContext.Provider>
  )
}
