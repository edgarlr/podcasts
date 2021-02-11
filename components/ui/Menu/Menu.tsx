import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import { useIsMobile } from '@lib/hooks/use-media-queries'

type Props = {
  children: React.ReactNode
  title: string
  position?: 'left' | 'right'
  width?: string
}

const Menu = ({ children, title, position = 'right', width }: Props) => {
  const { isVisible, toggle } = useMenuContext()

  const isMobile = useIsMobile()

  if (!isVisible) return null

  if (isMobile) {
    return (
      <div className="mobile-menu">
        <div className="content">
          <p className="title">{title}</p>
          <ul className="list">{children}</ul>
        </div>

        <button onClick={toggle} className="close-btn">
          Close
        </button>

        <style jsx>{`
          .mobile-menu {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 20;
            display: flex;
            flex-direction: column;
          }
          .content {
            flex: 0 0 1;
            display: flex;
            flex-direction: column;
            padding: 0;
            padding-top: 10rem;
            overflow-y: scroll;
            min-height: calc(100% - 5rem);
            max-height: calc(100% - 5rem);
            overflow-y: scroll;
          }
          .mobile-menu::before {
            content: '';
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(15px);
          }
          .title {
            font-size: var(--font-3xl);
            text-align: center;
            margin: auto 0 2rem;
            font-weight: bold;
          }
          .list {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            margin-bottom: 2.5rem;
          }
          .close-btn {
            flex: 0 0 5rem;
            width: 100%;
            height: 6rem;
            padding-bottom: 0.5rem;
            border-top: var(--default-border);
            font-size: var(--font-xl);
            font-weight: bold;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className={cn('menu', {
        ['position-left']: position === 'left',
        ['position-right']: position === 'right',
      })}
    >
      <p className="title">{title}</p>
      <ul className="list">{children}</ul>

      <style jsx>{`
        .menu {
          position: absolute;
          z-index: 20;
          margin-top: 0.5rem;
          padding: 1rem 0;
          width: ${width ? width : '16rem'};
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: var(--secondary);
          box-shadow: var(--default-shadow);
          border: var(--default-border);
        }
        .position-left {
          left: 0;
        }
        .position-right {
          right: 0;
        }
        .title {
          padding: 0 1.5rem;
          margin: 0.25rem 0 0.5rem 0;
          font-weight: bold;
          font-size: var(--font-sm);
        }
        .list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
        }
      `}</style>
    </div>
  )
}

export default Menu
