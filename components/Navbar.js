import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { colors, fontWeight } from 'styles/theme';

const Navbar = ({
  handleFollowClick = null,
  handleUnfollowClick = null,
  followed = false,
  headerText
}) => {
  const [fixedNav, setFixedNav] = useState(false)

  const fixNavigation = () => { 
    if (window.scrollY > 110) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNavigation);
    return () => {
      window.removeEventListener('scroll', fixNavigation)
    }
  }, [])
  return (
    <nav >
      <Link href={'/'}>
        <a>
          <MdKeyboardArrowLeft size='2rem' />
        </a>
      </Link>
      
      <h2 className={fixedNav ? 'show' : ''}>{headerText}</h2>

      {handleFollowClick && (
        <div >
          {!followed ? (
            <button onClick={handleFollowClick}>
              Follow
            </button>
          ) : (
            <button
              onClick={handleUnfollowClick}
              className='unfollow-btn'
            >
              Following
            </button>
          )}
        </div>
      )}

      <style jsx>{`
        nav {
          background: ${colors.white};
        }
        .unfollow-btn {
          background: ${colors.white};
          color: ${colors.black};
          border: 1px solid ${colors.black};
        }
        button {
          color: ${colors.white};
          background: ${colors.black};
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        nav {
          z-index: 1;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 3rem;
          padding: 1rem 1.5rem 0;
        }
        button {
          border: none;
          padding: 8px 16px;
          border-radius: 10px;
          cursor: pointer;
          outline: none;
        }
        a {
          display: flex;
          align-items: center;
        }
        h2 {
          margin: 0;
          font-size: 1.2rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(5px);
          transition: .2s;
        }
        h2.show {
          opacity: 1;
          transform: translateY(0)
        }
      `}</style>
    </nav>
  )
}

export default Navbar
