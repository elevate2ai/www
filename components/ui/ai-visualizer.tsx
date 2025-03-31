"use client"

import { useEffect, useRef } from "react"

interface AIVisualizerProps {
  width?: number
  height?: number
  primaryColor?: string
}

export function AIVisualizer({ width = 600, height = 400, primaryColor = "#7E3CAC" }: AIVisualizerProps) {
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

    // Criar nós
    const nodes: Node[] = []
    const numNodes = 50

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: i % 3 === 0 ? primaryColor : secondaryColor,
        colorRGB: i % 3 === 0 ? primaryColorRGB : secondaryColorRGB,
        connections: [],
      })
    }

    // Adicionar conexões entre nós
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const otherNode = nodes[j]
          const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
          if (distance < 100) {
            node.connections.push(j)
          }
        }
      }
    }

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Desenhar conexões
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]
          const distance = Math.sqrt(Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2))

          if (distance < 150) {
            const opacity = 1 - distance / 150
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)

            // Gradiente para a linha
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)
            gradient.addColorStop(
              0,
              `rgba(${node.colorRGB.r}, ${node.colorRGB.g}, ${node.colorRGB.b}, ${opacity * 0.5})`,
            )
            gradient.addColorStop(
              1,
              `rgba(${connectedNode.colorRGB.r}, ${connectedNode.colorRGB.g}, ${connectedNode.colorRGB.b}, ${opacity * 0.5})`,
            )

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Desenhar e atualizar nós
      for (const node of nodes) {
        // Desenhar nó
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Desenhar brilho
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2)
        gradient.addColorStop(0, `rgba(${node.colorRGB.r}, ${node.colorRGB.g}, ${node.colorRGB.b}, 0.3)`)
        gradient.addColorStop(1, `rgba(${node.colorRGB.r}, ${node.colorRGB.g}, ${node.colorRGB.b}, 0)`)
        ctx.fillStyle = gradient
        ctx.fill()

        // Atualizar posição
        node.x += node.vx
        node.y += node.vy

        // Rebater nas bordas
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      // Adicionar efeito de pulso central
      const centerX = width / 2
      const centerY = height / 2
      const maxRadius = 100
      const time = Date.now() / 1000
      const pulseRadius = (Math.sin(time) * 0.5 + 0.5) * maxRadius

      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2)
      const pulseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseRadius)
      pulseGradient.addColorStop(0, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.1)`)
      pulseGradient.addColorStop(0.8, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.05)`)
      pulseGradient.addColorStop(1, `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0)`)
      ctx.fillStyle = pulseGradient
      ctx.fill()

      // Desenhar texto "AI" no centro
      ctx.font = "bold 48px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
      ctx.fillText("AI", centerX, centerY)

      // Desenhar círculo central
      ctx.beginPath()
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = 2
      ctx.stroke()

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
        className="bg-black/80 backdrop-blur-sm"
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

// Tipo para os nós
interface Node {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  colorRGB: { r: number; g: number; b: number }
  connections: number[]
}

