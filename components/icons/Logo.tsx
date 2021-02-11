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
      <path d="M16.875 7.5H20.625V16.5H16.875V7.5Z" />
      <path d="M10.125 3H13.875V21H10.125V3Z" />
      <path d="M3.375 7.5H7.125V16.5H3.375V7.5Z" />
    </svg>
  )
}

export default Logo
