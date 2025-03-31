export function AIPattern({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-30 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          </pattern>
          <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.5" />
          </pattern>
          <pattern id="nodes" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="3" fill="currentColor" />
            <circle cx="0" cy="0" r="3" fill="currentColor" />
            <circle cx="0" cy="200" r="3" fill="currentColor" />
            <circle cx="200" cy="0" r="3" fill="currentColor" />
            <circle cx="200" cy="200" r="3" fill="currentColor" />
            <line x1="100" y1="100" x2="0" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="100" x2="0" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="100" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#circles)" />
        <rect width="100%" height="100%" fill="url(#nodes)" />
      </svg>
    </div>
  )
}

