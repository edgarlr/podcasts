import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const PlayerPortal = ({ children, selector }) => {
  const playerPortalRef = useRef()
  const [monted, setMonted] = useState(false)

  useEffect(() => {
    playerPortalRef.current = document.querySelector(selector)
    setMonted(true)
  }, [selector])

  return monted ? createPortal(children, playerPortalRef.current) : null
}

export default PlayerPortal

PlayerPortal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string.isRequired,
}
