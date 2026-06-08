"use client"

import { GlowCard } from "@/components/ui/glow-card"

const cases = [
  {
    sector: "Restaurante · El Rincón de Héctor",
    url: "elrincondehector.com",
    problema:
      "Contaba con una web obsoleta construida en Wix que únicamente mostraba la carta, sin actualizar y con una imagen que no hacía justicia al nivel real del restaurante.",
    solucion:
      "Página web diseñada completamente a medida, con una estética elegante y diferenciadora, carta renovada y arquitectura preparada para escalar a una web app de pedidos.",
    resultado:
      "Los clientes perciben el restaurante como un local de alto standing. Gracias al SEO integrado, los visitantes extranjeros encuentran la web en las primeras posiciones del buscador.",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="text-center mb-14 flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-xs font-medium text-brand-teal">
            Resultados
          </span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-white">
            Clientes que ya{" "}
            <span className="bg-linear-to-r from-brand-sky to-brand-teal bg-clip-text text-transparent">
              confían en nosotros
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Empresas que ya trabajan con Propus y han transformado
            su presencia digital en semanas.
          </p>
        </div>

        {/* Caso único centrado */}
        <div className="max-w-3xl mx-auto">
          {cases.map((c) => (
            <GlowCard
              key={c.sector}
              className="p-8 flex flex-col gap-6 bg-slate-900/80"
            >
              {/* Badge sector + URL */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 text-xs font-medium text-brand-teal">
                  {c.sector}
                </span>
                <span className="text-xs text-slate-500 font-mono">{c.url}</span>
              </div>

              {/* Bloques Problema / Solución / Resultado */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                <div className="flex flex-col gap-1.5 rounded-lg bg-slate-800/50 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-400">Problema</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.problema}</p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-lg bg-slate-800/50 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-sky">Solución</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.solucion}</p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-lg bg-brand-teal/10 border border-brand-teal/20 p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-teal">Resultado</span>
                  <p className="text-sm font-bold text-white leading-relaxed">{c.resultado}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  )
}
