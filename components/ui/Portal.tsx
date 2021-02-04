import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
  selector: string
}

const Portal = ({ children, selector }: Props) => {
  const PortalRef = useRef()
  const [monted, setMonted] = useState(false)

  useEffect(() => {
    PortalRef.current = document.querySelector(selector)
    setMonted(true)
  }, [selector])

  return monted ? createPortal(children, PortalRef.current) : null
}

export default Portal
