import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MenuContext } from './use-menu-context'

const MenuWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => {
    setIsVisible((oldVisible) => !oldVisible)
  }, [])

  useEffect(() => {
    const onOutsideClick = (e: any) => {
      if (isVisible && menuRef.current && !menuRef.current.contains(e.target)) {
        toggle()
      }
    }

    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [isVisible])

  const value = useMemo(() => ({ isVisible, toggle }), [isVisible])

  return (
    <MenuContext.Provider value={value}>
      <div style={{ position: 'relative' }} ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export default MenuWrapper
