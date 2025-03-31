export function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">A performance da Elevate2AI em números</h2>
          <p>
            Potenciamos negócios com Inteligência Artificial de ponta: milhões de tokens processados, integrações
            profundas via API e modelos conversacionais altamente disponíveis.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+85M</div>
            <p>Tokens processados por mês com LLMs</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+3.2M</div>
            <p>Chamadas API automatizadas</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">99.98%</div>
            <p>Uptime em chat models em produção</p>
          </div>
        </div>
      </div>
    </section>
  )
}

