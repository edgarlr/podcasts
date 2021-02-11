import { MouseEvent } from 'react'
import IconButton from '../IconButton'
import { useMenuContext } from './use-menu-context'

type Props = {
  children: React.ReactNode
  ariaLabel: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: MouseEvent) => void
}

const MenuButton = ({
  children,
  ariaLabel,
  onClick = null,
  variant = 'tertiary',
}: Props) => {
  const { toggle } = useMenuContext()

  const handleOnClick = (e: MouseEvent) => {
    onClick && onClick(e)
    toggle()
  }

  return (
    <IconButton onClick={handleOnClick} ariaLabel={ariaLabel} variant={variant}>
      {children}
    </IconButton>
  )
}

export default MenuButton
