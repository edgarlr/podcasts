import { useState } from 'react';
import { colors } from 'styles/theme';
import IconButton from './ui/IconButton';
import Close from 'components/icons/Close';
import Sort from 'components/icons/Sort';

export default function SortByButton({ handleFilterClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState('latest');

  const onBtnClick = (e) => {
    handleFilterClick(e.target.id);
    setIsActive(e.target.id);
    setShowDropdown(false);
  };

  return (
    <div className="sort">
      <IconButton
        handleOnClick={() => setShowDropdown(!showDropdown)}
        ariaLabel="Sort Episodes"
      >
        {showDropdown ? <Close /> : <Sort />}
      </IconButton>
      <div className="sort-dropdown">
        <button
          id="popular"
          onClick={onBtnClick}
          className={isActive === 'popular' ? 'active' : ''}
        >
          Most popular
        </button>
        <button
          id="oldest"
          onClick={onBtnClick}
          className={isActive === 'oldest' ? 'active' : ''}
        >
          Date added (oldest)
        </button>
        <button
          id="latest"
          onClick={onBtnClick}
          className={isActive === 'latest' ? 'active' : ''}
        >
          Date added (newest)
        </button>
      </div>

      <style jsx>{`
        .sort {
          position: relative;
          z-index: 9;
        }
        .sort-dropdown {
          display: ${showDropdown ? 'block' : 'none'};
          box-shadow: 0 0 20px rgba(100, 100, 100, 0.2);
          border-radius: 20px;
          background: #fff;
          padding: 15px 10px;
          position: absolute;
          right: 0;
          width: 15em;
          text-align: right;
        }
        button {
          outline: none;
          text-align: left;
          font-size: 0.9em;
          padding: 10px 10px;
          width: 100%;
          background: transparent;
          border: none;
        }
        .active {
          padding: 10px 10px;
          color: white;
          background: #131414;
          border-radius: 10px;
        }
        button:not(.active):hover {
          background: ${colors.whiteHover};
        }
      `}</style>
    </div>
  );
}
