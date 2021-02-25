import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MenuContext } from './use-menu-context'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { useIsMobile } from '@lib/hooks/use-media-queries'

const MenuWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const toggle = useCallback(() => {
    setIsVisible((oldVisible) => !oldVisible)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const onOutsideClick = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        toggle()
      }
    }

    document.addEventListener('click', onOutsideClick)
    document.addEventListener('touchstart', onOutsideClick)
    return () => {
      document.removeEventListener('click', onOutsideClick)
      document.removeEventListener('touchstart', onOutsideClick)
    }
  }, [isVisible])

  useEffect(() => {
    if (menuRef.current && isMobile) {
      if (isVisible) {
        disableBodyScroll(menuRef.current)
      } else {
        enableBodyScroll(menuRef.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
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
