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
        <MenuItem active={isActive === 'popular'}>
          <button id="popular" onClick={onBtnClick} className="menu-item">
            Most popular
          </button>
        </MenuItem>
        <MenuItem active={isActive === 'oldest'}>
          <button id="oldest" onClick={onBtnClick} className="menu-item">
            Date added (oldest)
          </button>
        </MenuItem>
        <MenuItem active={isActive === 'latest'}>
          <button id="latest" onClick={onBtnClick} className="menu-item">
            Date added (newest)
          </button>
        </MenuItem>
      </Menu>
    </MenuWrapper>
  )
}
