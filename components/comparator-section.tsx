"use client"

import { Button } from "@/components/ui/button"
import { Cpu } from "lucide-react"
import { ContactModal } from "@/components/ui/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

const tableData = [
  {
    feature: "Publicação automática em redes sociais",
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: "Integração via WhatsApp / Portal / API",
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: "Analytics avançado de performance",
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: "Campanhas promocionais personalizadas",
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: "Ofertas e alertas automatizados",
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: "Assistente de vendas com AI",
    free: false,
    pro: false,
    startup: true,
  },
  {
    feature: "Sugestão de roteiros automáticos",
    free: false,
    pro: false,
    startup: true,
  },
  {
    feature: "Orçamentos instantâneos com AI",
    free: false,
    pro: false,
    startup: true,
  },
]

export function ComparatorSection() {
  const { isOpen, emailSubject, openModal, closeModal } = useContactModal()

  return (
    <>
      <section className="py-16 md:py-32" id="comparator">
        <div className="mx-auto max-w-5xl px-6">
          <div className="w-full overflow-auto lg:overflow-visible">
            <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
              <thead className="bg-background sticky top-0">
                <tr className="*:py-4 *:text-left *:font-medium">
                  <th className="lg:w-2/5"></th>
                  <th className="space-y-3">
                    <span className="block">Silver</span>
                    <Button onClick={() => openModal("Interesse no Plano Silver")} variant="outline" size="sm">
                      Começar
                    </Button>
                  </th>
                  <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                    <span className="block">Gold</span>
                    <Button onClick={() => openModal("Interesse no Plano Gold")} size="sm">
                      Começar
                    </Button>
                  </th>
                  <th className="space-y-3">
                    <span className="block">Platinum</span>
                    <Button onClick={() => openModal("Interesse no Plano Platinum")} variant="outline" size="sm">
                      Começar
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody className="text-caption text-sm">
                <tr className="*:py-3">
                  <td className="flex items-center gap-2 font-medium">
                    <Cpu className="size-4" />
                    <span>Funcionalidades</span>
                  </td>
                  <td></td>
                  <td className="bg-muted border-none px-4"></td>
                  <td></td>
                </tr>
                {tableData.map((row, index) => (
                  <tr key={index} className="*:border-b *:py-3">
                    <td className="text-muted-foreground">{row.feature}</td>
                    <td>
                      {row.free === true ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E3CAC" className="size-4">
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.free || ""
                      )}
                    </td>
                    <td className="bg-muted border-none px-4">
                      <div className="-mb-3 border-b py-3">
                        {row.pro === true ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E3CAC" className="size-4">
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          row.pro || ""
                        )}
                      </div>
                    </td>
                    <td>
                      {row.startup === true ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7E3CAC" className="size-4">
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.startup || ""
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="*:py-6">
                  <td></td>
                  <td></td>
                  <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isOpen} onClose={closeModal} emailSubject={emailSubject} />
    </>
  )
}

