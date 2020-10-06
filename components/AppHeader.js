import { useState, useEffect } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { colors, fontWeight } from 'styles/theme';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { usePlayer } from 'lib/contexts';

const AppHeader = ({ headerText, navigation, button }) => {
  const router = useRouter();

  const { current } = usePlayer();

  const [fixedNav, setFixedNav] = useState(false);

  const fixNavigation = () => {
    if (window.scrollY > 110) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fixNavigation);
    return () => {
      window.removeEventListener('scroll', fixNavigation);
    };
  }, []);

  return (
    <header className={`${button && 'full-nav'} ${current && 'playing'}`}>
      {navigation && (
        <button onClick={() => router.back()} aria-label="Go back">
          <MdKeyboardArrowLeft size="2rem" aria-hidden="true" />
        </button>
      )}

      <p className={fixedNav ? 'show' : ''}>{headerText}</p>

      {button}

      <style jsx>{`
        header {
          background: ${colors.white};
        }
      `}</style>

      <style jsx>{`
        header {
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          height: 3rem;
          padding: 1rem 1.5rem 0;
          justify-content: center;
        }
        button {
          outline: none;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          position: absolute;
          left: 1.5rem;
          padding: 0;
        }
        .full-nav {
          justify-content: space-between;
        }
        .full-nav button {
          position: static;
        }
        p {
          margin: 0;
          font-size: 1.2rem;
          font-weight: ${fontWeight.bold};
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(5px);
          transition: 0.2s;
        }
        p.show {
          opacity: 1;
          transform: translateY(0);
        }
        @media screen and (min-width: 1024px) {
          header.playing {
            padding: 1rem 21.5rem 0 1.5rem;
          }
        }
        @media screen and (min-width: 1440px) {
          header.playing {
            padding: 1rem 24rem 0 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default AppHeader;

AppHeader.defaultProps = {
  navigation: false,
  button: null,
};

AppHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  navigation: PropTypes.bool,
  button: PropTypes.element,
};
