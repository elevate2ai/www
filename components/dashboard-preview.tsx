export function DashboardPreview() {
  return (
    <section className="container mx-auto mb-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
          <div className="flex items-center border-b px-4 py-2">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-sm font-medium">Dashboard</div>
          </div>
          <div className="p-4">
            <div className="flex items-center rounded-md border bg-muted/40 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-sm text-muted-foreground">Search...</span>
            </div>
            <div className="mt-8 h-[200px] rounded-md border bg-muted/40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

