"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps {
  children: React.ReactNode[]
  speed?: number
  speedOnHover?: number
  gap?: number
  className?: string
}

export function InfiniteSlider({ children, speed = 50, speedOnHover = 0, gap = 20, className }: InfiniteSliderProps) {
  const [hovering, setHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    // Duplicate the content to ensure smooth infinite scrolling
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    const currentSpeed = hovering ? speedOnHover : speed

    let animationFrameId: number
    let startTime: number

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      if (!scrollerRef.current) return

      const currentSpeed = hovering ? speedOnHover : speed
      const time = timestamp - startTime

      const translateX = (time * currentSpeed * 0.01) % scrollerRef.current.clientWidth
      scrollerRef.current.style.transform = `translateX(-${translateX}px)`

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [hovering, speed, speedOnHover])

  return (
    <div
      ref={containerRef}
      className={cn("flex w-full overflow-hidden", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div ref={scrollerRef} className="flex" style={{ gap: `${gap}px` }}>
        {children}
      </div>
    </div>
  )
}

