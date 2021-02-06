import { CSSProperties } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  to: string
  ariaLabel: string
  newTab?: boolean
  style?: CSSProperties
  className?: string
}

function ExternalLink({
  children,
  to,
  newTab = true,
  style = {},
  className = '',
  ariaLabel,
}: Props) {
  return (
    <a
      href={to}
      // Change target and rel attributes is newTab is true
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      style={style}
      aria-label={ariaLabel}
      className={cn('hover:opacity-50', className)}
    >
      {children}
      <style jsx>{`
        a {
          color: var(--primary-50);
          cursor: pointer;
          padding: 0.5rem;
          line-height: 0.5;
        }
        a:hover {
          color: var(--primary-95);
        }
      `}</style>
    </a>
  )
}

export default ExternalLink
