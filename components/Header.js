import React from 'react'
import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function Header({
    headerText,
    nav = null,
    serie = null,
    handleFollowClick = null,
    handleUnfollowClick = null,
    followed = false,
  }) {
    return (
      <header>
        {nav && (
          <div className='actions-bar'>
            {/* <Link href={serie ? `/${serie}` : '/'}> */}
            <Link href={'/'}>
              <a>
                <MdKeyboardArrowLeft size='1em' />
              </a>
            </Link>

            {handleFollowClick && (
              <div>
                {!followed ? (
                  <button onClick={handleFollowClick}>
                    SEGUIR
                  </button>
                ) : (
                  <button
                    onClick={handleUnfollowClick}
                    className='unfollow-btn'
                  >
                    Siguiendo
                  </button>
                )}
              </div>
            )}
          </div>
        )}
        {serie && <p>{`serie de ${serie}`}</p>}

        <h1>{headerText}</h1>

        <style jsx>{`
          .actions-bar {
            margin-bottom: 30px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          button {
            color: white;
            background: black;
            border: none;
            padding: 8px 16px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            outline: none;
          }
          .unfollow-btn {
            background: white;
            color: #131414;
            border: 1px solid #131414;
          }
          h1 {
            margin: 8px 0 0;
          }
          p {
            margin: 0;
            font-size: 12px;
            text-transform: uppercase;
          }
          header {
            margin-top: 3em;
            color: black;
            background: #fff;
            padding: 0 1.5em;
            height: auto;
            display: block;
            font-weight: 700;
            position: relative;
          }
          header a {
            color: black;
            font-size: 32px;
            position: sticky;
            top: 0;
            text-decoration: none;
          }
        `}</style>
      </header>
    );
  }
