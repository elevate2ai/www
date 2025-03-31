"use client"

import { useEffect, useRef } from "react"

interface AIAssistantVisualProps {
  width?: number
  height?: number
  primaryColor?: string
}

export function AIAssistantVisual({ width = 300, height = 300, primaryColor = "#7E3CAC" }: AIAssistantVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para alta resolução
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Definir estilos
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Cores
    const primaryColorRGB = hexToRgb(primaryColor)
    const secondaryColor = "#3B82F6" // Azul

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, width, height)

      const centerX = width / 2
      const centerY = height / 2
      const time = Date.now() / 1000

      // Desenhar círculo principal
      ctx.beginPath()
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fill()
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = 2
      ctx.stroke()

      // Desenhar ondas de áudio
      for (let i = 0; i < 5; i++) {
        const amplitude = 20 + i * 5
        const frequency = 0.05 + i * 0.01
        const phase = time * (i + 1) * 0.2

        ctx.beginPath()

        for (let x = -80; x <= 80; x++) {
          const y = Math.sin(x * frequency + phase) * amplitude

          if (x === -80) {
            ctx.moveTo(centerX + x, centerY + y)
          } else {
            ctx.lineTo(centerX + x, centerY + y)
          }
        }

        const opacity = 0.7 - i * 0.1
        ctx.strokeStyle =
          i % 2 === 0
            ? `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, ${opacity})`
            : `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Desenhar círculos concêntricos pulsantes
      for (let i = 0; i < 3; i++) {
        const pulseRate = Math.sin(time * (i + 1) * 0.5) * 0.5 + 0.5
        const radius = (50 + i * 30) * pulseRate

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle =
          i % 2 === 0
            ? `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, ${0.3 - i * 0.1})`
            : `rgba(59, 130, 246, ${0.3 - i * 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Desenhar ícone de assistente
      ctx.beginPath()
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2)
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40)
      gradient.addColorStop(0, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.8)`)
      gradient.addColorStop(1, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.4)`)
      ctx.fillStyle = gradient
      ctx.fill()

      // Desenhar rosto do assistente
      ctx.fillStyle = "white"

      // Olhos
      ctx.beginPath()
      ctx.arc(centerX - 15, centerY - 10, 5, 0, Math.PI * 2)
      ctx.arc(centerX + 15, centerY - 10, 5, 0, Math.PI * 2)
      ctx.fill()

      // Sorriso
      ctx.beginPath()
      ctx.arc(centerX, centerY + 10, 20, 0, Math.PI)
      ctx.strokeStyle = "white"
      ctx.lineWidth = 3
      ctx.stroke()

      // Desenhar partículas flutuantes
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2 + time * 0.2
        const distance = 120 + Math.sin(time + i) * 20
        const x = centerX + Math.cos(angle) * distance
        const y = centerY + Math.sin(angle) * distance

        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor
        ctx.fill()

        // Linhas conectando ao centro
        if (i % 3 === 0) {
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(centerX, centerY)
          ctx.strokeStyle = `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.2)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [width, height, primaryColor])

  return (
    <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
      <canvas
        ref={canvasRef}
        className="bg-black/50 backdrop-blur-sm"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}

// Função auxiliar para converter hex para RGB
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

