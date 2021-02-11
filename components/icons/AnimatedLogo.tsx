const AnimatedLogo = ({ ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <rect id="firstLine" x="0" y="0" height="24" width="6" />
        <rect x="9" y="0" height="24" width="6" />
        <rect x="18" y="0" height="24" width="6" />
      </svg>

      <style jsx>{`
        rect {
          animation: icon-move 0.9s infinite ease-in-out;
          animation-direction: alternate;
        }
        rect:nth-child(2) {
          animation-direction: alternate-reverse;
        }

        @keyframes icon-move {
          from {
            transform: scaleY(1) translateY(0);
          }
          to {
            transform: scaleY(0.5) translateY(50%);
          }
        }
      `}</style>
    </>
  )
}

export default AnimatedLogo
