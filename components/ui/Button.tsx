import { CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  style?: CSSProperties
  className?: string
}

const Button = ({
  onClick,
  variant = 'primary',
  children,
  style = {},
  className,
  ariaLabel,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn({ ['secondary']: variant === 'secondary' }, className)}
      style={style}
      aria-label={ariaLabel}
    >
      {children}

      <style jsx>{`
        button {
          color: var(--white);
          background: var(--black);
          font-weight: bold;
          border: none;
          padding: 8px 12px 6px;
          font-size: 0.8rem;
          border-radius: 10px;
          cursor: pointer;
          outline: none;
          transition: transform 0.2s;
        }
        .secondary {
          background: var(--white);
          color: var(--black);
          border: 1px solid var(--black);
        }
        button:hover {
          transform: scale(1.025);
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
