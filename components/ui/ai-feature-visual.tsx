"use client"

import { useEffect, useRef } from "react"

interface AIFeatureVisualProps {
  type: "brain" | "network" | "assistant" | "dashboard"
  width?: number
  height?: number
  primaryColor?: string
}

export function AIFeatureVisual({ type, width = 200, height = 200, primaryColor = "#7E3CAC" }: AIFeatureVisualProps) {
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
    const secondaryColorRGB = hexToRgb(secondaryColor)

    // Função de animação baseada no tipo
    function animate() {
      ctx.clearRect(0, 0, width, height)

      switch (type) {
        case "brain":
          drawBrain(ctx, width, height, primaryColor, secondaryColor)
          break
        case "network":
          drawNetwork(ctx, width, height, primaryColor, secondaryColor)
          break
        case "assistant":
          drawAssistant(ctx, width, height, primaryColor, secondaryColor)
          break
        case "dashboard":
          drawDashboard(ctx, width, height, primaryColor, secondaryColor)
          break
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [width, height, primaryColor, type])

  return (
    <div className="relative rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="bg-black/50 backdrop-blur-sm"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}

// Função para desenhar visualização de cérebro
function drawBrain(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
) {
  const centerX = width / 2
  const centerY = height / 2
  const time = Date.now() / 1000

  // Desenhar forma de cérebro
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, 60, 50, 0, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(0, 0, 0, 0.3)`
  ctx.fill()
  ctx.strokeStyle = primaryColor
  ctx.lineWidth = 2
  ctx.stroke()

  // Desenhar conexões neurais
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    const x1 = centerX + Math.cos(angle) * 30
    const y1 = centerY + Math.sin(angle) * 25

    for (let j = 0; j < 8; j++) {
      if (i !== j) {
        const angle2 = (j / 8) * Math.PI * 2
        const x2 = centerX + Math.cos(angle2) * 30
        const y2 = centerY + Math.sin(angle2) * 25

        // Pulsar as conexões com base no tempo
        const pulseRate = Math.sin(time + i + j) * 0.5 + 0.5

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle =
          i % 2 === 0
            ? `rgba(${hexToRgb(primaryColor).r}, ${hexToRgb(primaryColor).g}, ${hexToRgb(primaryColor).b}, ${pulseRate * 0.5})`
            : `rgba(${hexToRgb(secondaryColor).r}, ${hexToRgb(secondaryColor).g}, ${hexToRgb(secondaryColor).b}, ${pulseRate * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Desenhar nós
        ctx.beginPath()
        ctx.arc(x1, y1, 3, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor
        ctx.fill()
      }
    }
  }

  // Desenhar pulso central
  const pulseSize = (Math.sin(time) * 0.5 + 0.5) * 20
  ctx.beginPath()
  ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize)
  gradient.addColorStop(
    0,
    `rgba(${hexToRgb(primaryColor).r}, ${hexToRgb(primaryColor).g}, ${hexToRgb(primaryColor).b}, 0.8)`,
  )
  gradient.addColorStop(
    1,
    `rgba(${hexToRgb(primaryColor).r}, ${hexToRgb(primaryColor).g}, ${hexToRgb(primaryColor).b}, 0)`,
  )
  ctx.fillStyle = gradient
  ctx.fill()
}

// Função para desenhar visualização de rede
function drawNetwork(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
) {
  const time = Date.now() / 1000
  const nodes = []
  const numNodes = 12

  // Criar nós em grade
  for (let i = 0; i < numNodes; i++) {
    const row = Math.floor(i / 4)
    const col = i % 4
    nodes.push({
      x: col * (width / 3) + width / 6,
      y: row * (height / 3) + height / 6,
      color: i % 3 === 0 ? primaryColor : secondaryColor,
    })
  }

  // Desenhar conexões
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    for (let j = 0; j < nodes.length; j++) {
      if (i !== j) {
        const otherNode = nodes[j]
        const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))

        if (distance < width / 2) {
          const pulseRate = Math.sin(time + i + j) * 0.5 + 0.5
          const opacity = (1 - distance / (width / 2)) * pulseRate * 0.7

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.strokeStyle = `rgba(${hexToRgb(node.color).r}, ${hexToRgb(node.color).g}, ${hexToRgb(node.color).b}, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }
  }

  // Desenhar nós
  for (const node of nodes) {
    const pulseRate = Math.sin(time) * 0.5 + 0.5

    // Desenhar brilho
    ctx.beginPath()
    ctx.arc(node.x, node.y, 8 * pulseRate, 0, Math.PI * 2)
    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8 * pulseRate)
    gradient.addColorStop(
      0,
      `rgba(${hexToRgb(node.color).r}, ${hexToRgb(node.color).g}, ${hexToRgb(node.color).b}, 0.5)`,
    )
    gradient.addColorStop(1, `rgba(${hexToRgb(node.color).r}, ${hexToRgb(node.color).g}, ${hexToRgb(node.color).b}, 0)`)
    ctx.fillStyle = gradient
    ctx.fill()

    // Desenhar nó
    ctx.beginPath()
    ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = node.color
    ctx.fill()
  }
}

// Função para desenhar visualização de assistente
function drawAssistant(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
) {
  const centerX = width / 2
  const centerY = height / 2
  const time = Date.now() / 1000

  // Desenhar círculo principal
  ctx.beginPath()
  ctx.arc(centerX, centerY, 50, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(0, 0, 0, 0.3)`
  ctx.fill()
  ctx.strokeStyle = primaryColor
  ctx.lineWidth = 2
  ctx.stroke()

  // Desenhar ondas sonoras
  for (let i = 0; i < 3; i++) {
    const waveAmplitude = 10 + i * 10
    const waveFrequency = 0.1 + i * 0.05
    const wavePhase = time * (i + 1) * 0.5

    ctx.beginPath()
    for (let x = -50; x <= 50; x++) {
      const y = Math.sin(x * waveFrequency + wavePhase) * waveAmplitude

      if (x === -50) {
        ctx.moveTo(centerX + x, centerY + y)
      } else {
        ctx.lineTo(centerX + x, centerY + y)
      }
    }

    ctx.strokeStyle = i % 2 === 0 ? primaryColor : secondaryColor
    ctx.lineWidth = 2
    ctx.stroke()
  }

  // Desenhar ícone de microfone
  ctx.beginPath()
  ctx.arc(centerX, centerY, 15, 0, Math.PI * 2)
  ctx.fillStyle = primaryColor
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(centerX, centerY - 5)
  ctx.lineTo(centerX, centerY + 5)
  ctx.lineWidth = 3
  ctx.strokeStyle = "white"
  ctx.stroke()

  // Desenhar base do microfone
  ctx.beginPath()
  ctx.moveTo(centerX - 8, centerY + 15)
  ctx.lineTo(centerX + 8, centerY + 15)
  ctx.lineWidth = 3
  ctx.strokeStyle = primaryColor
  ctx.stroke()

  // Pulso de atividade
  const pulseSize = (Math.sin(time * 2) * 0.5 + 0.5) * 70
  ctx.beginPath()
  ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize)
  gradient.addColorStop(
    0,
    `rgba(${hexToRgb(primaryColor).r}, ${hexToRgb(primaryColor).g}, ${hexToRgb(primaryColor).b}, 0.3)`,
  )
  gradient.addColorStop(
    1,
    `rgba(${hexToRgb(primaryColor).r}, ${hexToRgb(primaryColor).g}, ${hexToRgb(primaryColor).b}, 0)`,
  )
  ctx.fillStyle = gradient
  ctx.fill()
}

// Função para desenhar visualização de dashboard
function drawDashboard(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  primaryColor: string,
  secondaryColor: string,
) {
  const time = Date.now() / 1000

  // Desenhar fundo do dashboard
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
  ctx.fillRect(20, 20, width - 40, height - 40)
  ctx.strokeStyle = primaryColor
  ctx.lineWidth = 2
  ctx.strokeRect(20, 20, width - 40, height - 40)

  // Desenhar barra de título
  ctx.fillStyle = primaryColor
  ctx.fillRect(20, 20, width - 40, 20)

  // Desenhar gráfico de linha
  ctx.beginPath()
  ctx.moveTo(40, height - 60)

  for (let x = 0; x < width - 80; x += 10) {
    const progress = x / (width - 80)
    const y = height - 60 - Math.sin(progress * Math.PI * 2 + time) * 30 - Math.sin(progress * Math.PI * 4) * 15
    ctx.lineTo(40 + x, y)
  }

  ctx.strokeStyle = secondaryColor
  ctx.lineWidth = 2
  ctx.stroke()

  // Desenhar gráfico de barras
  const barWidth = 15
  const barGap = 5
  const numBars = 5
  const barStartX = width / 2 - ((barWidth + barGap) * numBars) / 2

  for (let i = 0; i < numBars; i++) {
    const barHeight = 20 + Math.sin(time + i) * 15
    const x = barStartX + i * (barWidth + barGap)
    const y = height / 2 - barHeight

    ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor
    ctx.fillRect(x, y, barWidth, barHeight)
  }

  // Desenhar círculo de carregamento
  const loadingProgress = (Math.sin(time) * 0.5 + 0.5) * Math.PI * 2
  ctx.beginPath()
  ctx.arc(width / 4, height / 3, 15, 0, loadingProgress)
  ctx.strokeStyle = primaryColor
  ctx.lineWidth = 3
  ctx.stroke()

  // Desenhar ícones de menu
  for (let i = 0; i < 3; i++) {
    const x = 50 + i * 30
    const y = 50

    ctx.fillStyle = "white"
    ctx.fillRect(x, y, 20, 2)
  }
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

