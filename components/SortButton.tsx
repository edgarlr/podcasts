import { useState } from 'react'
import Sort from 'components/icons/Sort'
import { Menu, MenuButton, MenuItem, MenuWrapper } from './ui/Menu'

type TButtonType = 'latest' | 'popular' | 'oldest'

export default function SortButton({
  handleFilterClick,
}: {
  handleFilterClick: (type: TButtonType) => void
}) {
  const [isActive, setIsActive] = useState<TButtonType>('latest')

  const onBtnClick = (e: any) => {
    handleFilterClick(e.target.id)
    setIsActive(e.target.id)
  }

  return (
    <MenuWrapper>
      <MenuButton ariaLabel="Sort Episodes">
        <Sort />
      </MenuButton>
      <Menu title="Sort Episodes">
        <MenuItem
          active={isActive === 'popular'}
          onClick={onBtnClick}
          id="popular"
        >
          Most popular
        </MenuItem>
        <MenuItem
          id="oldest"
          onClick={onBtnClick}
          active={isActive === 'oldest'}
        >
          Date added (oldest)
        </MenuItem>
        <MenuItem
          id="latest"
          onClick={onBtnClick}
          active={isActive === 'latest'}
        >
          Date added (newest)
        </MenuItem>
      </Menu>
    </MenuWrapper>
  )
}
