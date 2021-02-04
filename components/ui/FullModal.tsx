import { usePlayer } from 'lib/hooks/use-player'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  button: React.ReactNode
}

const FullModal = ({ children, isOpen, button }: Props) => {
  const { current } = usePlayer()
  return (
    <div
      className={`modal ${isOpen ? 'full main-container' : ''} ${
        current ? 'playing' : ''
      }`}
    >
      <div
        className={`action-button ${current ? 'playing' : ''}`}
        aria-label="Open Modal"
      >
        {button}
      </div>

      {children}

      <style jsx>{`
        .modal {
          position: fixed;
          background: transparent;
          right: 0;
          left: 0;
          top: 0;
          bottom: 100%;
          transition: bottom 0.3s;
        }
        .full {
          overflow-y: scroll;
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
          right: 0.5rem;
          top: 0.75rem;
        }
        @media screen and (min-width: 766px) {
          .action-button {
            right: 1.5rem;
            top: 0.75rem;
          }
        }
        @media screen and (min-width: 1024px) {
          .action-button.playing {
            right: 24rem;
          }
        }
        @media screen and (min-width: 1440px) {
          .action-button.playing {
            right: 26rem;
          }
        }
      `}</style>
    </div>
  )
}

export default FullModal
