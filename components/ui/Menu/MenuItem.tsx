import cn from 'classnames'
// import { MouseEvent } from 'react'

type Props = {
  children: React.ReactNode
  active?: boolean
  // onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
  // href?: string
  // external?: boolean
  // subfix?: React.ReactNode
}
const MenuItem = ({ children, active = false }: Props) => {
  return (
    <li className={cn('list-element', { ['active']: active })}>
      {children}
      <style jsx>{`
        .list-element {
          list-style: none;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          position: relative;
        }
        .list-element:hover {
          background: var(--primary-05);
        }
        .list-element.active {
          font-weight: bold;
          background: var(--primary-05);
        }
        .list-element > :global(.menu-item) {
          font-size: var(--font-sm);
          color: var(--primary);
          padding: 0;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .list-element.active > :global(.menu-item) {
          font-weight: bold;
        }
        .list-element.active > :global(.menu-item)::after {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          height: 24px;
          width: 24px;
          content: '';
          margin: auto 1rem;
          background-size: 24px;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-check%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C/polyline%3E%3C/svg%3E');
          background-repeat: no-repeat;
          pointer-events: none;
        }
      `}</style>
    </li>
  )
}
export default MenuItem
