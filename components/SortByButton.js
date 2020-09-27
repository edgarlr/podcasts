import React, { useState } from 'react';
import { MdSort } from 'react-icons/md';

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
      <button
        className="icon"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="Sort Episodes"
      >
        <MdSort size="1.5em" aria-hidden="true" />
      </button>

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
        .icon {
          padding: 0;
        }
        .icon:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
