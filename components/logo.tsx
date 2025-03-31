import Image from "next/image"

export function Logo({ className, size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  // Tamanhos proporcionais para o logo
  const sizes = {
    small: { width: 100, height: 25 },
    default: { width: 140, height: 35 },
    large: { width: 200, height: 50 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/elevate_negative_resized.png"
        alt="Elevate2AI Logo"
        width={width}
        height={height}
        className="h-auto w-auto"
        priority
        unoptimized // Adicionando esta propriedade para evitar problemas com otimização de imagem
      />
    </div>
  )
}

