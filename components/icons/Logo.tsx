const Logo = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
  )
}

export default Logo
