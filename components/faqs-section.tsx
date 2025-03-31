import { AIPattern } from "@/components/ui/ai-pattern"
import { AIAssistantVisual } from "@/components/ui/ai-assistant-visual"

export function FaqsSection() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 relative overflow-hidden" id="faqs">
      <AIPattern className="top-0 right-0 w-full h-full text-[#7E3CAC]/10" />

      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-[#7E3CAC]/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl bg-gradient-to-r from-white via-white to-[#7E3CAC]/70 bg-clip-text text-transparent">
              Perguntas <br className="hidden lg:block" /> Frequentes <br className="hidden lg:block" />
            </h2>
            <p>Esclareça as suas dúvidas sobre os nossos serviços com Inteligência Artificial.</p>

            <div className="mt-8 hidden lg:block relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#7E3CAC]/20 rounded-full blur-2xl"></div>
              <AIAssistantVisual primaryColor="#7E3CAC" width={300} height={300} />
            </div>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0 backdrop-blur-sm bg-background/50 p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="pb-6">
              <h3 className="font-medium">Qual é a política de reembolso?</h3>
              <p className="text-muted-foreground mt-4">
                Oferecemos uma garantia de satisfação de 30 dias. Se não estiver satisfeito com o nosso serviço, pode
                solicitar o reembolso dentro deste período.
              </p>

              <ol className="list-outside list-decimal space-y-2 pl-4">
                <li className="text-muted-foreground mt-4">
                  Para solicitar um reembolso, entre em contacto com o nosso suporte com o número do pedido e o motivo.
                </li>
                <li className="text-muted-foreground mt-4">O reembolso será processado entre 3 a 5 dias úteis.</li>
                <li className="text-muted-foreground mt-4">
                  Esta política aplica-se apenas a novos clientes e está limitada a um reembolso por cliente.
                </li>
              </ol>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Como posso cancelar a minha subscrição?</h3>
              <p className="text-muted-foreground mt-4">
                Pode cancelar a qualquer momento, acedendo à sua conta e clicando no botão de cancelamento.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Posso fazer upgrade do meu plano?</h3>
              <p className="text-muted-foreground my-4">
                Sim! Pode atualizar o seu plano a qualquer momento na sua área de cliente.
              </p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">Será cobrada apenas a diferença entre os planos.</li>
                <li className="text-muted-foreground">
                  A alteração entra em vigor imediatamente, e o novo valor será aplicado no ciclo de faturação seguinte.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Disponibilizam suporte telefónico?</h3>
              <p className="text-muted-foreground mt-4">
                Atualmente não oferecemos suporte por telefone. Pode contactar-nos via e-mail ou chat em tempo real para
                qualquer questão.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">É possível integrar com ferramentas que já uso?</h3>
              <p className="text-muted-foreground mt-4">
                Sim. A Elevate2AI disponibiliza integração via API com CRMs, plataformas de redes sociais, serviços de
                email marketing e outros sistemas empresariais. A personalização depende do seu plano.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">A IA aprende com os dados da minha empresa?</h3>
              <p className="text-muted-foreground mt-4">
                Sim, os nossos modelos são ajustados com base em dados históricos (quando permitido) para melhorar
                continuamente os outputs gerados — sempre com total respeito pela privacidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

