"use client"

import { useState, useCallback } from "react"

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")

  const openModal = useCallback((subject: string) => {
    setEmailSubject(subject)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    emailSubject,
    openModal,
    closeModal,
  }
}

