import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return (item !== null ? JSON.parse(item) : initialValue)
    } catch(e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      const itemValue = () => {
        if(typeof value === String) {
          return value
        }
        return JSON.stringify(value)
      }

      window.localStorage.setItem(key, itemValue())
      setStoredValue(value)
    } catch (e) {
      console.error('[ERROR]: ', e);      
    }
  }
  return [storedValue, setLocalStorage]
}