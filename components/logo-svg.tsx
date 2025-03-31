export function LogoSVG({
  className,
  width = 140,
  height = 35,
  color = "white",
}: {
  className?: string
  width?: number
  height?: number
  color?: string
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 80V0h16.8v64.8H50V80H0zM58.4 80V0h16.8v80H58.4zM86.4 80V0h16.8v31.2h32.4V0h16.8v80h-16.8V47.2h-32.4V80H86.4zM164.8 80V0h50.4v15.2h-33.6v16.8h28.8v15.2h-28.8v17.6h33.6V80h-50.4zM226.4 80V0h16.8v64.8h33.2V80h-50zM286.4 80V0h16.8v80h-16.8zM316 80V0h16.8v31.2h32.4V0H382v80h-16.8V47.2h-32.4V80H316z"
        fill={color}
      />
      <path d="M400 0L350 100h-30l50-100h30z" fill="#8B5CF6" />
    </svg>
  )
}

