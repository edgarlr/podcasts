import cn from 'classnames'
import Link from 'next/link'
import { HTMLAttributes, MouseEvent } from 'react'
import ExternalLink from '../ExternalLink'
import { useMenuContext } from './use-menu-context'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
  subfix?: React.ReactNode
  onClick?: (e: MouseEvent) => void
  href?: string
  external?: boolean
  unstyled?: boolean
}

const MenuItem = ({
  children,
  active = false,
  subfix = null,
  external = false,
  unstyled = false,
  href,
  onClick,
  ...rest
}: Props) => {
  const { toggle } = useMenuContext()

  const handleOnClick = (e: MouseEvent) => {
    onClick && onClick(e)
    toggle()
  }

  let Component: any

  if (href) {
    if (external) {
      Component = (
        <ExternalLink to={href} ariaLabel="Link" className="menu-item">
          {children}
        </ExternalLink>
      )
    } else {
      Component = (
        <Link href={href}>
          <a className="menu-item">{children}</a>
        </Link>
      )
    }
  } else if (onClick) {
    Component = (
      <button onClick={handleOnClick} className="menu-item" {...rest}>
        {children}
      </button>
    )
  } else if (unstyled) {
    Component = <>{children}</>
  } else {
    Component = <span className="menu-item">{children}</span>
  }

  return (
    <li className={cn('list-element', { ['active']: active })}>
      {Component}

      {subfix && <span className="subfix">{subfix}</span>}

      <style jsx>{`
        .list-element {
          list-style: none;
          cursor: pointer;
          padding: 0;
          margin: 0.25rem 0;
          height: 4rem;
          position: relative;
          display: flex;
          align-items: center;
        }
        .list-element:hover {
          background: var(--primary-a-05);
        }
        .list-element.active {
          font-weight: bold;
          background: var(--primary-a-05);
        }
        .subfix {
          position: absolute;
          right: 1.5rem;
          pointer-events: none;
        }
        .list-element > :global(.menu-item) {
          font-size: var(--font-lg);
          color: var(--primary);
          padding: 0 2rem;
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
          margin: auto 2rem;
          background-size: 24px;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-check%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C/polyline%3E%3C/svg%3E');
          background-repeat: no-repeat;
          pointer-events: none;
        }
        @media screen and (min-width: 641px) {
          .list-element {
            margin: 0;
            height: 3rem;
          }
          .list-element > :global(.menu-item) {
            font-size: var(--font-sm);
            padding: 0 1.5rem;
          }
          .list-element.active > :global(.menu-item)::after {
            margin: auto 1rem;
          }
        }
      `}</style>
    </li>
  )
}
export default MenuItem
