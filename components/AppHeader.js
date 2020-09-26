import { useState, useEffect } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { colors } from 'styles/theme';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const AppHeader = ({ headerText, navigation, button }) => {
  const router = useRouter();

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
    <header className={button ? 'full-nav' : ''}>
      {navigation && (
        <button onClick={() => router.back()}>
          <MdKeyboardArrowLeft size="2rem" />
        </button>
      )}

      <h2 className={fixedNav ? 'show' : ''}>{headerText}</h2>

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
        h2 {
          margin: 0;
          font-size: 1.2rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(5px);
          transition: 0.2s;
        }
        h2.show {
          opacity: 1;
          transform: translateY(0);
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
