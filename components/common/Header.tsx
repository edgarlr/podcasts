import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePlayer } from 'lib/hooks/use-player'
import IconButton from '../ui/IconButton'
import ArrowLeft from 'components/icons/ArrowLeft'
import cn from 'classnames'
import dynamic from 'next/dynamic'

type Props = {
  headerText: string
  navigation: boolean
  button: React.ReactNode
}

const DynamicSearch = dynamic(() => import('@components/search/SearchModal'), {
  ssr: false,
})

const Header = ({ headerText, navigation = true, button = null }: Props) => {
  const router = useRouter()

  const { current } = usePlayer()

  const [isShowed, setIsShowed] = useState(false)

  const fixNavigation = () => {
    if (window.scrollY > 110) {
      setIsShowed(true)
    } else {
      setIsShowed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNavigation)
    return () => {
      window.removeEventListener('scroll', fixNavigation)
    }
  }, [])

  return (
    <header className={cn({ ['playing']: current })}>
      {navigation && (
        <IconButton
          onClick={() => router.back()}
          ariaLabel="Go back"
          className="back-btn"
        >
          <ArrowLeft />
        </IconButton>
      )}

      {headerText ? (
        <p className={cn('title', { ['show']: isShowed })}>{headerText}</p>
      ) : (
        <div className="title logo show">Podcasts</div>
      )}

      {button ? button : <DynamicSearch />}

      <style jsx>{`
        header {
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.8rem;
          background: var(--white);
          height: 3.5rem;
        }
        header > :global(.back-btn) {
          position: absolute;
          left: 0.5rem;
          padding: 0;
        }
        .title {
          margin: 0;
          font-size: var(--font-md);
          font-weight: bold;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(6px);
          transition-property: opacity, transform;
          transition-duration: 0.2s;
        }
        .logo {
          position: absolute;
          left: 0;
          padding: 0.8rem;
          font-size: var(--font-2xl);
        }
        .title.show {
          opacity: 1;
          transform: translateY(2px);
        }
        @media screen and (min-width: 766px) {
          header {
            padding: 0.5rem 1.5rem;
          }
          .title {
            font-size: 1.2rem;
          }
          header > :global(.back-btn) {
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
