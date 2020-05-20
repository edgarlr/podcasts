import React, { useState} from 'react'
import {MdSort} from 'react-icons/md'

export default function FiltersIcon({handleFilterClick}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isActive, setIsActive] = useState('latest');

  const onBtnClick = e => {
    handleFilterClick(e.target.id);
    setIsActive(e.target.id)
  }

  return (
    <div className='sort'>
      <div
        className='icon'
        onClick={() => {
          showDropdown ? setShowDropdown(false) : setShowDropdown(true)
          }
        }
      >
        <MdSort size='1.5em' />
      </div>
      <div className='sort-dropdown'>
        <button
          id='popular'
          onClick={onBtnClick}
          className={isActive === 'popular' ? 'active' : ''}
        >
          Más Popuares
        </button>
        <button
          id='oldest'
          onClick={onBtnClick}
          className={isActive === 'oldest' ? 'active' : ''}
        >
          Fecha de subida (más antiguos)
        </button>
        <button
          id='latest'
          onClick={onBtnClick}
          className={isActive === 'latest' ? 'active' : ''}
        >
          Fecha de subida (más recientes)
        </button>
      </div>

      <style jsx>{`
        .sort {
          position: relative;
        }
        .sort-dropdown {
          display: ${showDropdown ? 'block' : 'none'};
          box-shadow: 0 2px 5px rgba(100, 100, 100, 0.2);
          border-radius: 20px;
          background: #fff;
          padding: 15px 10px;
          position: absolute;
          right: 0;
          width: 15em;
          text-align: right;
          z-index: 20000;
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
        .icon:hover {
          color: ${showDropdown ? '#999' : 'inherit'};
        }
      `}</style>
    </div>
  );
}
