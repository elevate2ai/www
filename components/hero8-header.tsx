"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

export function HeroHeader() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center mr-8">
            <Logo size="default" />
          </Link>
          <nav className="ml-auto hidden gap-6 md:flex">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Recursos
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Preços
            </Link>
            <Link
              href="/#team"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Team
            </Link>
            <Link
              href="/#faqs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-4">
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button onClick={() => openModal("Quero começar com a Elevate2AI")}>
              <span>Começar</span>
            </Button>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

