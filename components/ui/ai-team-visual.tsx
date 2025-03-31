"use client"

import { useEffect, useRef } from "react"

interface AITeamVisualProps {
  primaryColor?: string
  index?: number
}

export function AITeamVisual({ primaryColor = "#7E3CAC", index = 0 }: AITeamVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para alta resolução
    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Cores
    const primaryColorRGB = hexToRgb(primaryColor)
    const secondaryColor = "#3B82F6" // Azul
    const secondaryColorRGB = hexToRgb(secondaryColor)
    const simpsonYellow = "#FED90F"

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Fundo gradiente
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const time = Date.now() / 1000

      // Desenhar padrão de grade
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.5

      const gridSize = 30
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Desenhar partículas flutuantes
      const numParticles = 50
      for (let i = 0; i < numParticles; i++) {
        const x = (Math.sin(time * 0.2 + i * 0.3) * 0.5 + 0.5) * width
        const y = (Math.cos(time * 0.3 + i * 0.2) * 0.5 + 0.5) * height
        const size = (Math.sin(time + i) * 0.5 + 0.5) * 3 + 1

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : "white"
        ctx.fill()
      }

      // Desenhar personagem Simpson
      const centerX = width / 2
      const centerY = height / 2 - 20

      // Escolher personagem com base no índice
      if (index === 0) {
        drawHomer(ctx, centerX, centerY, simpsonYellow, primaryColor)
      } else {
        drawBart(ctx, centerX, centerY, simpsonYellow, primaryColor)
      }

      // Efeito de dados/código
      const numLines = 10
      const lineHeight = 15
      const startY = height - numLines * lineHeight - 20

      for (let i = 0; i < numLines; i++) {
        const y = startY + i * lineHeight
        const lineWidth = Math.random() * 100 + 50
        const x = 20

        ctx.fillStyle = i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : "rgba(255, 255, 255, 0.7)"
        ctx.fillRect(x, y, lineWidth, 2)
      }

      // Círculos de dados ao redor da cabeça
      const numCircles = 8
      for (let i = 0; i < numCircles; i++) {
        const angle = (i / numCircles) * Math.PI * 2 + time * 0.5
        const circleX = centerX + Math.cos(angle) * 80
        const circleY = centerY - 40 + Math.sin(angle) * 80

        ctx.beginPath()
        ctx.arc(circleX, circleY, 5, 0, Math.PI * 2)
        ctx.fillStyle =
          i % 2 === 0
            ? `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.7)`
            : `rgba(${secondaryColorRGB.r}, ${secondaryColorRGB.g}, ${secondaryColorRGB.b}, 0.7)`
        ctx.fill()

        // Linhas conectando os círculos
        if (i > 0) {
          const prevAngle = ((i - 1) / numCircles) * Math.PI * 2 + time * 0.5
          const prevX = centerX + Math.cos(prevAngle) * 80
          const prevY = centerY - 40 + Math.sin(prevAngle) * 80

          ctx.beginPath()
          ctx.moveTo(circleX, circleY)
          ctx.lineTo(prevX, prevY)
          ctx.strokeStyle = `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.3)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      // Removido o número de identificação

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [primaryColor, index])

  return <canvas ref={canvasRef} className="w-full h-full bg-black" />
}

// Função para desenhar Homer Simpson
function drawHomer(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  simpsonYellow: string,
  primaryColor: string,
) {
  // Cabeça
  ctx.beginPath()
  ctx.arc(centerX, centerY - 60, 50, 0, Math.PI * 2)
  ctx.fillStyle = simpsonYellow
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Olhos
  ctx.beginPath()
  ctx.arc(centerX - 15, centerY - 70, 12, 0, Math.PI * 2)
  ctx.arc(centerX + 15, centerY - 70, 12, 0, Math.PI * 2)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // Pupilas
  ctx.beginPath()
  ctx.arc(centerX - 15, centerY - 70, 4, 0, Math.PI * 2)
  ctx.arc(centerX + 15, centerY - 70, 4, 0, Math.PI * 2)
  ctx.fillStyle = "black"
  ctx.fill()

  // Boca
  ctx.beginPath()
  ctx.moveTo(centerX - 20, centerY - 40)
  ctx.quadraticCurveTo(centerX, centerY - 30, centerX + 20, centerY - 40)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Barba por fazer
  ctx.beginPath()
  ctx.arc(centerX, centerY - 30, 30, 0.2 * Math.PI, 0.8 * Math.PI)
  ctx.strokeStyle = "#888"
  ctx.lineWidth = 1
  ctx.stroke()

  // Orelha
  ctx.beginPath()
  ctx.arc(centerX + 45, centerY - 60, 10, 0, Math.PI * 2)
  ctx.fillStyle = simpsonYellow
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // Cabelo em M
  ctx.beginPath()
  ctx.moveTo(centerX - 40, centerY - 80)
  ctx.lineTo(centerX - 30, centerY - 100)
  ctx.lineTo(centerX - 20, centerY - 80)
  ctx.lineTo(centerX - 10, centerY - 100)
  ctx.lineTo(centerX, centerY - 80)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Corpo
  ctx.beginPath()
  ctx.arc(centerX, centerY + 50, 60, 0, Math.PI * 2)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Camisa
  ctx.beginPath()
  ctx.arc(centerX, centerY + 50, 55, 0, Math.PI * 2)
  ctx.fillStyle = primaryColor
  ctx.fill()

  // Gola
  ctx.beginPath()
  ctx.moveTo(centerX - 20, centerY)
  ctx.lineTo(centerX, centerY + 20)
  ctx.lineTo(centerX + 20, centerY)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // Aura futurista
  ctx.beginPath()
  ctx.arc(centerX, centerY, 120, 0, Math.PI * 2)
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120)
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)")
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 0)")
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")
  ctx.fillStyle = gradient
  ctx.fill()
}

// Função para desenhar Bart Simpson
function drawBart(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  simpsonYellow: string,
  primaryColor: string,
) {
  // Cabeça
  ctx.beginPath()
  ctx.arc(centerX, centerY - 60, 45, 0, Math.PI * 2)
  ctx.fillStyle = simpsonYellow
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Cabelo em pontas
  for (let i = 0; i < 9; i++) {
    const x = centerX - 40 + i * 10

    ctx.beginPath()
    ctx.moveTo(x, centerY - 90)
    ctx.lineTo(x, centerY - 110)
    ctx.strokeStyle = simpsonYellow
    ctx.lineWidth = 8
    ctx.stroke()
  }

  // Olhos
  ctx.beginPath()
  ctx.arc(centerX - 15, centerY - 70, 12, 0, Math.PI * 2)
  ctx.arc(centerX + 15, centerY - 70, 12, 0, Math.PI * 2)
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // Pupilas
  ctx.beginPath()
  ctx.arc(centerX - 15, centerY - 70, 4, 0, Math.PI * 2)
  ctx.arc(centerX + 15, centerY - 70, 4, 0, Math.PI * 2)
  ctx.fillStyle = "black"
  ctx.fill()

  // Boca
  ctx.beginPath()
  ctx.moveTo(centerX - 20, centerY - 40)
  ctx.quadraticCurveTo(centerX, centerY - 30, centerX + 20, centerY - 40)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Orelha
  ctx.beginPath()
  ctx.arc(centerX + 45, centerY - 60, 10, 0, Math.PI * 2)
  ctx.fillStyle = simpsonYellow
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // Camiseta
  ctx.beginPath()
  ctx.moveTo(centerX - 40, centerY)
  ctx.lineTo(centerX - 60, centerY + 100)
  ctx.lineTo(centerX + 60, centerY + 100)
  ctx.lineTo(centerX + 40, centerY)
  ctx.closePath()
  ctx.fillStyle = primaryColor
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 2
  ctx.stroke()

  // Aura futurista
  ctx.beginPath()
  ctx.arc(centerX, centerY, 120, 0, Math.PI * 2)
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120)
  gradient.addColorStop(0, "rgba(255, 255, 255, 0)")
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 0)")
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")
  ctx.fillStyle = gradient
  ctx.fill()
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

