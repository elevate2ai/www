"use client"

import { useEffect, useRef } from "react"

interface HighTechVisualProps {
  width?: number
  height?: number
  primaryColor?: string
}

export function HighTechVisual({ width = 600, height = 400, primaryColor = "#7E3CAC" }: HighTechVisualProps) {
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

    // Criar partículas
    const particles: Particle[] = []
    const numParticles = 100

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: i % 5 === 0 ? primaryColor : i % 5 === 1 ? secondaryColor : "#ffffff",
      })
    }

    // Criar nós
    const nodes: Node[] = []
    const numNodes = 8

    // Posicionar nós em um círculo
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) * 0.3

    // Nó central
    nodes.push({
      x: centerX,
      y: centerY,
      radius: 15,
      color: primaryColor,
      label: "AI",
      connections: [],
      pulse: 0,
      pulseSpeed: 0.02,
    })

    // Nós ao redor
    const nodeLabels = ["ML", "NLP", "CV", "RL", "GAN", "LLM", "NN"]
    for (let i = 0; i < numNodes - 1; i++) {
      const angle = (i / (numNodes - 1)) * Math.PI * 2
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      nodes.push({
        x,
        y,
        radius: 10,
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        label: nodeLabels[i],
        connections: [0], // Conectar ao nó central
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      })

      // Adicionar conexão do nó central para este nó
      nodes[0].connections.push(i + 1)
    }

    // Adicionar algumas conexões entre nós periféricos
    for (let i = 1; i < nodes.length; i++) {
      const numConnections = Math.floor(Math.random() * 2) + 1
      for (let j = 0; j < numConnections; j++) {
        let targetNode
        do {
          targetNode = Math.floor(Math.random() * (nodes.length - 1)) + 1
        } while (targetNode === i || nodes[i].connections.includes(targetNode))

        nodes[i].connections.push(targetNode)
        if (!nodes[targetNode].connections.includes(i)) {
          nodes[targetNode].connections.push(i)
        }
      }
    }

    // Criar ondas de dados
    const dataWaves: DataWave[] = []
    const numWaves = 15

    for (let i = 0; i < numWaves; i++) {
      const sourceNode = Math.floor(Math.random() * nodes.length)
      const targetNode = nodes[sourceNode].connections[Math.floor(Math.random() * nodes[sourceNode].connections.length)]

      dataWaves.push({
        sourceNode,
        targetNode,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        size: Math.random() * 3 + 2,
      })
    }

    // Criar efeito de holograma 3D
    const hologramLines: HologramLine[] = []
    const numHologramLines = 20

    for (let i = 0; i < numHologramLines; i++) {
      const angle = (i / numHologramLines) * Math.PI * 2
      const radius = 80 + Math.random() * 40

      hologramLines.push({
        angle,
        radius,
        height: Math.random() * 100 + 50,
        color: i % 2 === 0 ? primaryColor : secondaryColor,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Desenhar fundo
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Desenhar grade
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      // Grade horizontal
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Grade vertical
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Desenhar efeito de holograma 3D
      const time = Date.now() / 1000

      ctx.save()
      ctx.translate(centerX, centerY)

      for (const line of hologramLines) {
        const x1 = Math.cos(line.angle + time * 0.1) * line.radius
        const y1 = Math.sin(line.angle + time * 0.1) * (line.radius * 0.5) // Achatado para efeito de perspectiva
        const x2 = Math.cos(line.angle + time * 0.1) * line.radius
        const y2 = Math.sin(line.angle + time * 0.1) * (line.radius * 0.5) - line.height

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = `${line.color}${Math.floor(line.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.lineWidth = 1
        ctx.stroke()

        // Pequenos pontos nas extremidades
        ctx.beginPath()
        ctx.arc(x2, y2, 1, 0, Math.PI * 2)
        ctx.fillStyle = line.color
        ctx.fill()
      }

      ctx.restore()

      // Atualizar e desenhar partículas
      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebater nas bordas
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      }

      // Atualizar e desenhar nós
      for (const node of nodes) {
        node.pulse += node.pulseSpeed
        if (node.pulse > Math.PI * 2) node.pulse -= Math.PI * 2

        // Desenhar conexões
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)

          const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)
          gradient.addColorStop(0, `${node.color}40`)
          gradient.addColorStop(1, `${connectedNode.color}40`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Desenhar pulso
        const pulseSize = (Math.sin(node.pulse) * 0.5 + 0.5) * node.radius * 2 + node.radius
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        const pulseGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize)
        pulseGradient.addColorStop(0, `${node.color}00`)
        pulseGradient.addColorStop(0.5, `${node.color}20`)
        pulseGradient.addColorStop(1, `${node.color}00`)
        ctx.fillStyle = pulseGradient
        ctx.fill()

        // Desenhar nó
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius)
        nodeGradient.addColorStop(0, node.color)
        nodeGradient.addColorStop(1, `${node.color}80`)
        ctx.fillStyle = nodeGradient
        ctx.fill()

        // Desenhar texto
        ctx.font = `${node.radius}px Arial`
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(node.label, node.x, node.y)
      }

      // Atualizar e desenhar ondas de dados
      for (const wave of dataWaves) {
        wave.progress += wave.speed
        if (wave.progress > 1) {
          // Reiniciar onda com novos nós
          wave.sourceNode = Math.floor(Math.random() * nodes.length)
          wave.targetNode =
            nodes[wave.sourceNode].connections[Math.floor(Math.random() * nodes[wave.sourceNode].connections.length)]
          wave.progress = 0
        }

        const sourceNode = nodes[wave.sourceNode]
        const targetNode = nodes[wave.targetNode]

        const x = sourceNode.x + (targetNode.x - sourceNode.x) * wave.progress
        const y = sourceNode.y + (targetNode.y - sourceNode.y) * wave.progress

        ctx.beginPath()
        ctx.arc(x, y, wave.size, 0, Math.PI * 2)
        ctx.fillStyle = wave.color
        ctx.fill()
      }

      // Efeito de brilho global
      ctx.fillStyle = `rgba(${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}, 0.03)`
      ctx.fillRect(0, 0, width, height)

      // Texto "ELEVATE2AI"
      ctx.font = "bold 36px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("ELEVATE2AI", centerX, height - 40)

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
        className="bg-black backdrop-blur-sm"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  )
}

// Tipos
interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
}

interface Node {
  x: number
  y: number
  radius: number
  color: string
  label: string
  connections: number[]
  pulse: number
  pulseSpeed: number
}

interface DataWave {
  sourceNode: number
  targetNode: number
  progress: number
  speed: number
  color: string
  size: number
}

interface HologramLine {
  angle: number
  radius: number
  height: number
  color: string
  opacity: number
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

