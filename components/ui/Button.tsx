import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  MouseEvent,
} from 'react'
import cn from 'classnames'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  prefix?: React.ReactNode
  subfix?: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  style?: CSSProperties
  className?: string
  disabled?: boolean
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
  disabled = false,
  ...rest
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
      disabled={disabled}
      {...rest}
    >
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {subfix && <span className="subfix">{subfix}</span>}

      <style jsx>{`
        button {
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
          position: static;
          justify-content: center;
          align-items: center;
          width: max-content;
          margin: 0;
          border: 1px solid transparent;
        }
        button:hover {
          transform: scale(1.015);
        }
        button:focus {
          color: var(--primary);
          background: var(--secondary);
          border: 1px solid var(--primary);
        }
        button:disabled {
          opacity: 0.25;
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
          margin-right: -0.5rem;
        }
        .primary {
          color: var(--secondary);
          background: var(--primary);
        }
        .primary:hover {
          color: var(--primary);
          background: var(--secondary);
          border: 1px solid var(--primary);
        }
        .secondary {
          background: var(--secondary);
          color: var(--primary-80);
          border: 1px solid var(--primary-50);
        }
        .secondary:hover {
          color: var(--primary);
          border: 1px solid var(--primary);
        }
      `}</style>
    </button>
  )
}

export default Button
