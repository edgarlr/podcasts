import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
  selector: string
}

const PlayerPortal = ({ children, selector }: Props) => {
  const playerPortalRef = useRef()
  const [monted, setMonted] = useState(false)

  useEffect(() => {
    playerPortalRef.current = document.querySelector(selector)
    setMonted(true)
  }, [selector])

  return monted ? createPortal(children, playerPortalRef.current) : null
}

export default PlayerPortal
