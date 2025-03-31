"use client"

import { useState, useEffect } from "react"
import { X, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  emailSubject: string
}

export function ContactModal({ isOpen, onClose, emailSubject }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted) return null
  if (!isOpen) return null

  const handleEmailClick = () => {
    window.location.href = `mailto:info@elevate2ai.pt?subject=${encodeURIComponent(emailSubject)}`
    onClose()
  }

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/351910228839?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre a Elevate2AI. ${emailSubject}`)}`,
      "_blank",
    )
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="bg-background border border-white/10 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-6 text-center">Como prefere entrar em contacto?</h3>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleEmailClick}
            className="flex flex-col items-center justify-center gap-2 py-6 bg-gradient-to-br from-[#7E3CAC]/20 to-blue-900/20 hover:from-[#7E3CAC]/30 hover:to-blue-900/30 border border-white/10"
          >
            <Mail size={32} />
            <span>Email</span>
          </Button>

          <Button
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center gap-2 py-6 bg-gradient-to-br from-green-600/20 to-green-800/20 hover:from-green-600/30 hover:to-green-800/30 border border-white/10"
          >
            <MessageSquare size={32} />
            <span>WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

