import { usePlayer } from 'lib/contexts';
import PropTypes from 'prop-types';

const FullModal = ({ children, isOpen, button }) => {
  const { current } = usePlayer();
  return (
    <div className={`container ${isOpen && 'full'} ${current && 'playing'}`}>
      <button className="action-button" aria-label="Open Modal">
        {button}
      </button>

      {children}

      <style jsx>{`
        .container {
          position: fixed;
          background: transparent;
          bottom: 100vh;
          right: 0;
          left: 0;
          top: 0;
          padding: 2rem 1.5rem;
          text-align: right;
          transition: bottom 0.3s;
          overflow-y: scroll;
        }
        .full {
          padding: 3.5rem 1.5rem;
          background: white;
          bottom: 0;
          text-align: left;
        }
        .action-button {
          outline: none;
          border: none;
          background: transparent;
          padding: 0;
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
        }
        @media screen and (min-width: 768px) {
          .container {
            padding: 2rem 5rem 7rem;
          }
        }
        @media screen and (min-width: 1024px) {
          .container {
            padding: 2rem 12rem 7rem;
          }
          .container.playing {
            padding: 2rem 23rem 7rem 4rem;
          }
          .action-button {
            right: 23rem;
          }
        }
        @media screen and (min-width: 1440px) {
          .container {
            padding: 2rem 18rem 7rem;
          }
          .container.playing {
            padding: 2rem 30rem 7rem 8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FullModal;

FullModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  button: PropTypes.element.isRequired,
};
