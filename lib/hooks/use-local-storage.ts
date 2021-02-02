import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const readValue = () => {
    if (typeof window === undefined) initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(initialValue)

  const setLocalStorage = (value: T) => {
    if (typeof window === undefined) return

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
      window.dispatchEvent(new Event('local-storage'))
    } catch (e) {
      return
    }
  }

  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue())
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('local-storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('local-storage', handleStorageChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [storedValue, setLocalStorage]
}
