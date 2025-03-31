import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Settings2, Sparkles, Zap, BrainCircuit, Network, Bot } from "lucide-react"
import type { ReactNode } from "react"
import { AIFeatureVisual } from "@/components/ui/ai-feature-visual"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 relative" id="features">
      {/* Fundo com gradiente e efeito de brilho */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7E3CAC]/5 via-background to-blue-900/5"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#7E3CAC]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="@container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-white via-white to-[#7E3CAC]/70 bg-clip-text text-transparent">
            Desenhado para escalar com o seu negócio
          </h2>
          <p className="mt-4 text-lg">
            A Elevate2AI combina flexibilidade, controlo total e o poder dos Large Language Models para acelerar a
            inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<BrainCircuit className="size-6" />}
            title="Inteligência Artificial Avançada"
            description="Modelos de linguagem de última geração que compreendem contexto e geram conteúdo otimizado para seus objetivos de negócio."
            visualType="brain"
          />

          <FeatureCard
            icon={<Network className="size-6" />}
            title="Integração Perfeita"
            description="Conecte-se facilmente com suas ferramentas existentes através de APIs robustas e flexíveis, sem interromper seus fluxos de trabalho."
            visualType="network"
          />

          <FeatureCard
            icon={<Bot className="size-6" />}
            title="Automação Inteligente"
            description="Automatize processos complexos com assistentes de IA que aprendem com dados e melhoram continuamente seus resultados."
            visualType="assistant"
          />

          <FeatureCard
            icon={<Zap className="size-6" />}
            title="Altamente personalizável"
            description="Configuração avançada para adaptar cada detalhe às necessidades específicas do seu negócio e setor."
          />

          <FeatureCard
            icon={<Settings2 className="size-6" />}
            title="Controlo absoluto"
            description="Desde os elementos visuais até à lógica de integração via API, tem total controlo para criar soluções únicas."
          />

          <FeatureCard
            icon={<Sparkles className="size-6" />}
            title="Impulsionado por AI"
            description="Soluções alimentadas por LLMs e chat models para automação inteligente e decisões orientadas por dados em tempo real."
          />
        </div>

        {/* Nova seção de destaque com visualização de dashboard */}
        <div className="mt-24 bg-gradient-to-r from-[#7E3CAC]/20 to-blue-900/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Visualize o impacto da IA em tempo real</h3>
              <p className="text-lg mb-6">
                Nossos dashboards intuitivos permitem que você acompanhe métricas importantes e visualize o impacto da
                IA em seus resultados de negócio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="bg-[#7E3CAC]/20 p-1 rounded-full">
                    <Sparkles className="size-4 text-[#7E3CAC]" />
                  </div>
                  <span>Métricas de engajamento em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-blue-500/20 p-1 rounded-full">
                    <Zap className="size-4 text-blue-400" />
                  </div>
                  <span>Análise de sentimento automatizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <Network className="size-4 text-green-400" />
                  </div>
                  <span>Previsões baseadas em dados históricos</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#7E3CAC]/20 rounded-full blur-2xl"></div>
              <AIFeatureVisual type="dashboard" primaryColor="#7E3CAC" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  visualType?: "brain" | "network" | "assistant"
}

const FeatureCard = ({ icon, title, description, visualType }: FeatureCardProps) => (
  <Card className="group overflow-hidden border border-white/10 bg-gradient-to-br from-background to-[#7E3CAC]/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#7E3CAC]/5">
    <CardHeader className="pb-3">
      <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
          {icon}
        </div>

        {visualType && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <AIFeatureVisual type={visualType} primaryColor="#7E3CAC" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
        )}
      </div>

      <h3 className="mt-6 font-medium text-center text-xl">{title}</h3>
    </CardHeader>

    <CardContent>
      <p className="text-sm text-center text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

