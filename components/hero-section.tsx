"use client"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/hero8-header"
import { HighTechVisual } from "@/components/ui/high-tech-visual"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

export function HeroSection() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative">
          {/* Fundo abstrato com gradiente usando a cor do logo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7E3CAC]/20 via-background to-blue-900/20 z-0"></div>

          {/* Padrão de grade para efeito futurista */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

          <div className="pb-24 pt-12 md:pb-32 lg:pb-40 lg:pt-28 relative z-10">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
              <div className="mx-auto max-w-lg text-center lg:mx-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-4xl font-medium md:text-5xl lg:mt-0 xl:text-6xl bg-gradient-to-r from-white via-white to-[#7E3CAC]/70 bg-clip-text text-transparent">
                  Eleve o seu negócio com Inteligência Artificial de última geração
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  A Elevate2AI utiliza Large Language Models (LLMs) e chat models para automatizar processos críticos,
                  gerar conteúdos otimizados com base em métricas como engagement, reach e CTR, e integrar-se com as
                  suas ferramentas via API. Criamos soluções inteligentes que escalam e impulsionam a performance do seu
                  negócio.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    onClick={() => openModal("Quero começar com a Elevate2AI")}
                    size="lg"
                    className="px-5 text-base bg-gradient-to-r from-[#7E3CAC] to-blue-600 hover:from-[#6E2A9C] hover:to-blue-700 border-0"
                  >
                    <span className="text-nowrap">Comece agora</span>
                  </Button>
                  <Button
                    onClick={() => openModal("Solicitar demonstração da Elevate2AI")}
                    size="lg"
                    variant="outline"
                    className="px-5 text-base backdrop-blur-sm bg-background/30"
                  >
                    <span className="text-nowrap">Solicitar demonstração</span>
                  </Button>
                </div>
              </div>

              {/* Nova visualização high-tech */}
              <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#7E3CAC]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex justify-center lg:justify-end">
                  <HighTechVisual primaryColor="#7E3CAC" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

