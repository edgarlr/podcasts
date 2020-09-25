const FullModal = ({ children, isOpen, button }) => (
  <div className={`container ${isOpen ? 'full' : ' '}`}>
    <button className="action-button">{button}</button>

    {children}

    <style jsx>{`
      .container {
        position: fixed;
        background: transparent;
        bottom: 100vh;
        right: 0;
        left: 0;
        top: 0;
        padding: 1.5rem;
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
    `}</style>
  </div>
);

export default FullModal;
