import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl">∼</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#solution"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solution
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-md">
            Login
          </Button>
          <Button variant="default" className="rounded-md">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

