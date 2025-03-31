"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

export function PricingSection() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <section className="py-16 md:py-32" id="pricing">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-center text-4xl font-semibold lg:text-5xl">Planos que escalam com o seu negócio</h1>
            <p>
              Elevate2AI oferece soluções inteligentes de IA adaptadas a cada fase da sua jornada digital. Automatize,
              envolva e escale com tecnologia de ponta.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-4">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">🚀 Silver - AI Social Manager</CardTitle>
                <span className="my-3 block text-2xl font-semibold">199 €</span>
                <CardDescription className="text-sm">
                  Gestão Inteligente de Conteúdos & Comunicação Multicanal
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <p className="text-sm">
                  Automação da gestão de redes sociais com IA. Os clientes podem solicitar publicações através de
                  portal, WhatsApp ou outras plataformas. O sistema gere e publica conteúdos automaticamente, otimizando
                  o alcance e analisando o desempenho através de <strong>Analytics avançado</strong>.
                </p>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button onClick={() => openModal("Interesse no Plano Silver")} variant="outline" className="w-full">
                  Começar
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">🔥 Gold - AI Customer Engagement</CardTitle>
                <span className="my-3 block text-2xl font-semibold">270 €</span>
                <CardDescription className="text-sm">
                  Marketing Inteligente & Campanhas Automatizadas
                  <br />
                  (Inclui todos os serviços do Silver!)
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <p className="text-sm">
                  Melhore a comunicação e <strong>aumente as vendas</strong> com um assistente de IA que cria e envia{" "}
                  <strong>campanhas promocionais personalizadas</strong>. Parabenize clientes no aniversário com{" "}
                  <strong>ofertas exclusivas</strong> e envie alertas automáticos sobre{" "}
                  <strong>promoções irresistíveis</strong> de viagens.
                </p>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button onClick={() => openModal("Interesse no Plano Gold")} variant="outline" className="w-full">
                  Começar
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">💎 Platinum - AI Travel Assistant</CardTitle>
                <span className="my-3 block text-2xl font-semibold">420 €</span>
                <CardDescription className="text-sm">
                  Automação de Pedidos & Agilização de Vendas
                  <br />
                  (Inclui todos os serviços do Silver + Gold!)
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <p className="text-sm">
                  Aumente a produtividade com um <strong>AI Travel Agent</strong> que{" "}
                  <strong>interage diretamente com plataformas de parceiros</strong>, sugere{" "}
                  <strong>roteiros automáticos</strong> e elabora <strong>orçamentos no imediato</strong>.{" "}
                  <strong>Acelere a resposta aos pedidos</strong> e converta mais leads com um serviço de assistência
                  inteligente.
                </p>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button onClick={() => openModal("Interesse no Plano Platinum")} variant="outline" className="w-full">
                  Começar
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-2 border-dashed border-zinc-300 dark:border-zinc-700">
              <CardHeader>
                <CardTitle className="font-medium">🏢 Enterprise - Soluções à Medida</CardTitle>
                <span className="my-3 block text-2xl font-semibold">Preço sob consulta</span>
                <CardDescription className="text-sm">Soluções personalizadas com IA de alto impacto</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <p className="text-sm">
                  A Elevate2AI desenvolve soluções dedicadas para empresas com necessidades específicas. Criamos
                  integrações customizadas, fluxos automatizados avançados, e módulos exclusivos para maximizar
                  resultados com IA. Ideal para sectores com requisitos únicos.
                </p>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button onClick={() => openModal("Interesse em Soluções Enterprise")} className="w-full">
                  Falar com Especialista
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

