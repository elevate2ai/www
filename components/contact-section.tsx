"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AIPattern } from "@/components/ui/ai-pattern"
import { Mail, Phone, MessageSquare } from "lucide-react"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

export function ContactSection() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <section className="py-32 relative overflow-hidden" id="contact">
        <AIPattern className="top-0 left-0 w-full h-full text-primary/10" />

        <div className="absolute top-40 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 lg:px-0 relative">
          <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl bg-gradient-to-r from-white via-white to-purple-300 bg-clip-text text-transparent">
            Entre em contacto com a Elevate2AI
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ContactCard
              icon={<Mail className="size-6 text-purple-400" />}
              title="Email"
              description="info@elevate2ai.pt"
              onClick={() => openModal("Contato via Email")}
            />

            <ContactCard
              icon={
                <div className="flex items-center gap-2">
                  <Phone className="size-6 text-blue-400" />
                  <WhatsAppIcon className="size-6 text-green-500" />
                </div>
              }
              title="Telefone / WhatsApp"
              description="+351 910 228 839"
              onClick={() => openModal("Contato via Telefone")}
            />

            <ContactCard
              icon={<MessageSquare className="size-6 text-green-400" />}
              title="Chat"
              description="Disponível 24/7"
              onClick={() => openModal("Contato via Chat")}
            />
          </div>

          <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0 backdrop-blur-sm bg-background/50 rounded-xl border-white/10 shadow-lg">
            <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Geral & Colaborações</h2>
                <button
                  onClick={() => openModal("Contato Geral & Colaborações")}
                  className="text-lg text-blue-400 hover:underline"
                >
                  info@elevate2ai.pt
                </button>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-sm">+351 910 228 839</p>
                  <WhatsAppIcon className="size-4 text-green-500" />
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/elevate2ai/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/elevate-2ai-052405356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>

              <div className="relative mt-8">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                <div className="w-full h-48 bg-gradient-to-br from-[#7E3CAC]/20 to-blue-900/20 rounded-lg border border-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#7E3CAC]"
                  >
                    <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                    <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A2.97 2.97 0 0 1 8.5 6"></path>
                    <path d="m18 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A2.97 2.97 0 0 1 20.5 6"></path>
                    <path d="m9 6.5 3.5-3.5"></path>
                    <path d="m10.5 10 4.5-4.5"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Imprensa</h3>
                <button onClick={() => openModal("Contato Imprensa")} className="text-lg text-blue-400 hover:underline">
                  info@elevate2ai.pt
                </button>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-sm">+351 910 228 839</p>
                  <WhatsAppIcon className="size-4 text-green-500" />
                </div>
              </div>

              <div className="relative mt-8">
                <div className="absolute -top-5 -right-5 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="w-full h-48 bg-gradient-to-br from-blue-900/20 to-[#7E3CAC]/20 rounded-lg border border-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M8 13h8"></path>
                    <path d="M8 17h8"></path>
                    <path d="M8 9h2"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
          <form
            action=""
            className="border px-4 py-12 lg:px-0 lg:py-24 backdrop-blur-sm bg-background/50 rounded-b-xl border-white/10 shadow-lg"
          >
            <Card className="mx-auto max-w-lg p-8 sm:p-16 bg-card/80 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold">Queremos ouvir sobre o seu desafio</h3>
              <p className="mt-4 text-sm">
                Preencha o formulário e a nossa equipa irá ajudá-lo a escalar com Inteligência Artificial.
              </p>

              <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                <div>
                  <Label htmlFor="name" className="space-y-2">
                    Nome completo
                  </Label>
                  <Input type="text" id="name" required className="bg-background/70" />
                </div>
                <div>
                  <Label htmlFor="email" className="space-y-2">
                    Email profissional
                  </Label>
                  <Input type="email" id="email" required className="bg-background/70" />
                </div>
                <div>
                  <Label htmlFor="country" className="space-y-2">
                    País / Região
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-background/70">
                      <SelectValue placeholder="Escolha o seu país ou região" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Worldwide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="website" className="space-y-2">
                    Website da empresa
                  </Label>
                  <Input type="url" id="website" className="bg-background/70" />
                </div>
                <div>
                  <Label htmlFor="job" className="space-y-2">
                    Função profissional
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-background/70">
                      <SelectValue placeholder="Selecione a sua função" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Marketing / Social Media</SelectItem>
                      <SelectItem value="2">Comercial / Vendas</SelectItem>
                      <SelectItem value="3">IT / Desenvolvimento</SelectItem>
                      <SelectItem value="4">Direção / Gestão</SelectItem>
                      <SelectItem value="5">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="msg" className="space-y-2">
                    Mensagem
                  </Label>
                  <Textarea id="msg" rows={3} className="bg-background/70" />
                </div>
                <Button
                  type="button"
                  onClick={() => openModal("Contato via Formulário do Site")}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
                >
                  Enviar
                </Button>
              </div>
            </Card>
          </form>
        </div>
      </section>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

const ContactCard = ({ icon, title, description, onClick }: ContactCardProps) => (
  <button onClick={onClick} className="group w-full text-left">
    <Card className="border border-white/10 bg-gradient-to-br from-background to-purple-950/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 h-full">
      <div className="p-6 flex flex-col items-center text-center h-full">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground group-hover:text-blue-400 transition-colors">{description}</p>
      </div>
    </Card>
  </button>
)

// Componente do ícone do WhatsApp
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

