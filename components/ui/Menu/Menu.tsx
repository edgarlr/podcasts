import { useMenuContext } from './use-menu-context'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  title: string
  position?: 'left' | 'right'
  width?: string
}
const Menu = ({ children, title, position = 'right', width }: Props) => {
  const { isVisible } = useMenuContext()

  if (!isVisible) return null

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
