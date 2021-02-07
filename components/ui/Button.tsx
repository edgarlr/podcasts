import { CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'
import ArrowLeft from '@components/icons/ArrowLeft'

type Props = {
  children: React.ReactNode
  prefix?: React.ReactNode
  subfix?: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  style?: CSSProperties
  className?: string
}

const Button = ({
  onClick,
  prefix = null,
  subfix = null,
  variant = 'primary',
  children,
  style = {},
  className,
  ariaLabel,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        {
          ['primary']: variant === 'primary',
          ['secondary']: variant === 'secondary',
        },
        className
      )}
      style={style}
      aria-label={ariaLabel}
    >
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {subfix && <span className="subfix">{subfix}</span>}

      <style jsx>{`
        button {
          color: var(--secondary);
          background: var(--primary);
          font-size: var(--font-md);
          font-weight: bold;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 5rem;
          cursor: pointer;
          outline: none;
          transition: transform 0.15s;
          transform: scale(1);
          display: flex;
          justify-content: center;
          align-items: center;
          width: max-content;
          margin: 0 auto;
        }
        span {
          line-height: 0.5;
        }
        .prefix {
          padding-right: 0.5rem;
          margin-left: -0.5rem;
        }
        .subfix {
          padding-left: 0.5rem;
        }
        .secondary {
          background: var(--white);
          color: var(--black);
          border: 1px solid var(--black);
        }
        button:hover {
          transform: scale(1.015);
        }
        .primary:hover {
          color: var(--primary);
          background: var(--secondary);
          border: 1px solid var(--primary);
        }
        .primary:disabled {
          opacity: 0.25;
        }
        @media screen and (min-width: 768px) {
          button {
            padding: 8px 16px 6px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </button>
  )
}

export default Button
