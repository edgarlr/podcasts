import cn from 'classnames'
import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  MouseEvent,
} from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  style?: CSSProperties
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
}

const IconButton = ({
  children,
  onClick,
  variant = 'primary',
  style = {},
  className,
  ariaLabel,
  disabled = false,
  ...rest
}: Props) => (
  <button
    className={cn(
      {
        ['primary']: variant === 'primary',
        ['secondary']: variant === 'secondary',
        ['tertiary']: variant === 'tertiary',
      },
      className
    )}
    onClick={onClick}
    aria-label={ariaLabel}
    style={style}
    disabled={disabled}
    {...rest}
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
        line-height: 0.5;
        padding: 0.625rem;
      }
      button:focus {
        background: var(--primary-20);
      }
      .primary:hover {
        background: var(--primary-05);
      }
      .secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      .tertiary {
        color: var(--primary-80);
        border: var(--default-border);
      }
      .tertiary:hover {
        color: var(--primary);
        border: 1px solid var(--primary);
      }
    `}</style>
  </button>
)

export default IconButton
