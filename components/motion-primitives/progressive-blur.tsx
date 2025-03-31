import { cn } from "@/lib/utils"

interface ProgressiveBlurProps {
  className?: string
  direction: "left" | "right" | "top" | "bottom"
  blurIntensity?: number
}

export function ProgressiveBlur({ className, direction, blurIntensity = 10 }: ProgressiveBlurProps) {
  const getGradient = () => {
    switch (direction) {
      case "left":
        return `linear-gradient(to right, rgba(0,0,0,${blurIntensity}) 0%, transparent 100%)`
      case "right":
        return `linear-gradient(to left, rgba(0,0,0,${blurIntensity}) 0%, transparent 100%)`
      case "top":
        return `linear-gradient(to bottom, rgba(0,0,0,${blurIntensity}) 0%, transparent 100%)`
      case "bottom":
        return `linear-gradient(to top, rgba(0,0,0,${blurIntensity}) 0%, transparent 100%)`
      default:
        return ""
    }
  }

  return (
    <div
      className={cn("absolute", className)}
      style={{
        background: getGradient(),
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    />
  )
}

