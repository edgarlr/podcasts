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

  return (
    <div
      className={
        isMobile
          ? 'mobile'
          : cn('menu', {
              ['position-left']: position === 'left',
              ['position-right']: position === 'right',
            })
      }
    >
      <p className="title">{title}</p>
      <ul className="list">{children}</ul>

      {isMobile && (
        <button onClick={toggle} className="close-btn">
          Close
        </button>
      )}

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
        .mobile {
          position: fixed;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          z-index: 20;
          top: 0;
          bottom: 0;
          width: 100%;

          overflow-y: scroll;
        }
        .mobile::before {
          content: '';
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: -1;
          right: 0;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(15px);
        }
        .mobile .title {
          font-size: var(--font-3xl);
          text-align: center;
          margin: auto 0 1rem;
        }
        .mobile .list {
          margin-bottom: 8rem;
        }
        .close-btn {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
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

export default Menu
