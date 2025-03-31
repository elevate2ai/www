"use client"

import { AITeamVisual } from "@/components/ui/ai-team-visual"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

const members = [
  {
    name: "Rui Gonçalves",
    role: "Co-Fundador — Inovação & Estratégia de Negócio",
    link: "#",
    character: 0, // Homer
  },
  {
    name: "Tiago Rebelo",
    role: "Co-Fundador — Desenvolvimento Técnico & Arquitetura AI",
    link: "#",
    character: 2, // Bart
  },
]

export function TeamSection() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <section className="py-16 md:py-32 relative" id="team">
        {/* Fundo com gradiente e efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E3CAC]/5 via-background to-blue-900/5"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#7E3CAC]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-5xl border-t px-6 relative z-10">
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-white via-white to-[#7E3CAC]/70 bg-clip-text text-transparent">
                O núcleo visionário da Elevate2AI
              </h2>
            </div>
            <div className="mt-6 sm:mt-0">
              <p className="text-lg">
                A nossa equipa fundadora combina visão estratégica com execução técnica de alto nível. Somos movidos por
                uma missão: escalar negócios com Inteligência Artificial aplicada e acessível.
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div key={index} className="group overflow-hidden">
                  <div className="relative">
                    <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#7E3CAC]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="h-96 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <AITeamVisual primaryColor="#7E3CAC" index={member.character} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                        {member.name}
                      </h3>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      <button
                        onClick={() => openModal("Contato com " + member.name)}
                        className="group-hover:text-[#7E3CAC] inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        Linktree
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Novo card para "Junte-se à equipe" */}
              <div className="group overflow-hidden">
                <div className="h-96 w-full rounded-xl border border-dashed border-white/20 flex items-center justify-center bg-gradient-to-br from-[#7E3CAC]/10 to-blue-900/10 transition-all duration-500 group-hover:border-[#7E3CAC]/30">
                  <div className="text-center p-8">
                    <div className="bg-gradient-to-br from-[#7E3CAC]/20 to-blue-500/20 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8 text-[#7E3CAC]"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-4">Junte-se à nossa equipe</h3>
                    <p className="text-muted-foreground mb-6">
                      Estamos sempre à procura de talentos apaixonados por IA e inovação
                    </p>
                    <button
                      onClick={() => openModal("Interesse em Vagas na Elevate2AI")}
                      className="bg-gradient-to-r from-[#7E3CAC] to-blue-600 hover:from-[#6E2A9C] hover:to-blue-700 text-white px-6 py-2 rounded-md inline-block"
                    >
                      Ver vagas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

