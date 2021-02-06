import cn from 'classnames'
import { CSSProperties, MouseEvent } from 'react'

type Props = {
  children: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  style?: CSSProperties
  className?: string
  variant?: 'primary' | 'secondary'
}

const IconButton = ({
  children,
  onClick,
  variant = 'primary',
  style = {},
  className,
  ariaLabel,
}: Props) => (
  <button
    className={cn(
      {
        ['primary']: variant === 'primary',
        ['secondary']: variant === 'secondary',
      },
      className
    )}
    onClick={onClick}
    aria-label={ariaLabel}
    style={style}
  >
    {children}
    <style jsx>{`
      button {
        background: transparent;
        outline: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
      }
      .primary:hover {
        background: var(--primary-05);
      }
      .secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}</style>
  </button>
)

export default IconButton
