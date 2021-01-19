import { useState, useEffect } from 'react'

import { colors, fontWeight } from 'styles/theme'
import { useRouter } from 'next/router'
import { usePlayer } from 'lib/contexts'
import IconButton from '../ui/IconButton'
import ArrowLeft from 'components/icons/ArrowLeft'

type Props = {
  headerText: string
  navigation: boolean
  button: React.ReactNode
}

const Header = ({ headerText, navigation = false, button = null }: Props) => {
  const router = useRouter()

  const { current } = usePlayer()

  const [fixedNav, setFixedNav] = useState(false)

  const fixNavigation = () => {
    if (window.scrollY > 110) {
      setFixedNav(true)
    } else {
      setFixedNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNavigation)
    return () => {
      window.removeEventListener('scroll', fixNavigation)
    }
  }, [])

  return (
    <header
      className={`${button ? 'full-nav' : ''} ${current ? 'playing' : ''}`}
    >
      {navigation && (
        <div className="nav-btn-container">
          <IconButton onClick={() => router.back()} ariaLabel="go back">
            <ArrowLeft />
          </IconButton>
        </div>
      )}

      <p className={fixedNav && 'show'}>{headerText}</p>

      {button}

      <style jsx>{`
        header {
          background: ${colors.white};
        }
      `}</style>

      <style jsx>{`
        header {
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          height: 3rem;
          padding: 0.1rem 0.8rem;
          justify-content: center;
        }
        .nav-btn-container {
          position: absolute;
          left: 0.5rem;
          padding: 0;
        }
        .full-nav {
          justify-content: space-between;
        }
        .full-nav .nav-btn-container {
          position: static;
        }
        p {
          margin: 0;
          font-size: 1rem;
          font-weight: ${fontWeight.bold};
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(6px);
          transition: 0.2s;
        }
        p.show {
          opacity: 1;
          transform: translateY(2px);
        }
        @media screen and (min-width: 766px) {
          header {
            padding: 0.5rem 1.5rem 0;
          }
          p {
            font-size: 1.2rem;
          }
          .nav-btn-container {
            left: 1.5rem;
          }
        }
        @media screen and (min-width: 1024px) {
          header.playing {
            padding: 1rem 24rem 0 1.5rem;
          }
        }
        @media screen and (min-width: 1440px) {
          header.playing {
            padding: 1rem 26rem 0 1.5rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
