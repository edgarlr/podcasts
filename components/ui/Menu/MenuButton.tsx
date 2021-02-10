import IconButton from '../IconButton'
import { useMenuContext } from './use-menu-context'

type Props = {
  children: React.ReactNode
  ariaLabel: string
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const MenuButton = ({ children, ariaLabel, variant = 'tertiary' }: Props) => {
  const { toggle } = useMenuContext()
  return (
    <IconButton onClick={toggle} ariaLabel={ariaLabel} variant={variant}>
      {children}
    </IconButton>
  )
}

export default MenuButton
