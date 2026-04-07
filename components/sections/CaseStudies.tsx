"use client"

import { GlowCard } from "@/components/ui/glow-card"
import { ClockIcon, TrendingUpIcon, FileTextIcon, SmileIcon } from "lucide-react"

const metrics = [
  {
    icon: ClockIcon,
    value: "20h+",
    label: "Horas ahorradas por semana de media",
  },
  {
    icon: TrendingUpIcon,
    value: "40%",
    label: "Mejora en eficiencia operativa",
  },
  {
    icon: FileTextIcon,
    value: "1.000+",
    label: "Documentos procesados automáticamente",
  },
  {
    icon: SmileIcon,
    value: "100%",
    label: "Clientes satisfechos",
  },
]

const cases = [
  {
    sector: "Talleres Collado",
    problema:
      "Procesaban +100 facturas al mes con 1 persona dedicada.",
    solucion:
      "Sistema de gestión y clasificación automática de facturas via pdf e imagen y aplicación de contabilidad y fiscalidad completa.",
    resultado:
      "80% de reducción en tiempo de procesamiento con revisión manual ocasional.",
  },
  {
    sector: "Clínica dental y fisioterapia",
    problema: "Perdían leads por no responder mensajes fuera de horario.",
    solucion:
      "Agente de IA conversacional 24/7 en WhatsApp con envío de recordatorios, soporte al cliente y agenda de citas.",
    resultado:
      "35% más citas agendadas. Respuesta inmediata a cada consulta.",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Cabecera */}
        <div className="text-center mb-14 flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
            Resultados
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
            Números que hablan{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              por nosotros.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Casos reales de empresas que automatizaron con Alt4ir y transformaron
            su operación en semanas.
          </p>
        </div>

        {/* Grid de 4 métricas */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <GlowCard
                key={metric.value}
                className="p-6 flex flex-col gap-3 bg-slate-900/80 sm:items-center sm:text-center sm:p-8"
              >
                <div className="flex items-center justify-center gap-3 sm:flex-col sm:gap-4 md:flex-row md:mb-4">
                  <div className="size-12 shrink-0 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Icon className="size-6 text-violet-400" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
                    {metric.value}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-snug text-center">{metric.label}</p>
              </GlowCard>
            )
          })}
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <GlowCard
              key={c.sector}
                            className="p-8 flex flex-col gap-6 bg-slate-900/80"
            >
              {/* Badge sector */}
              <span className="self-start inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                {c.sector}
              </span>

              {/* Bloques Problema / Solución / Resultado */}
              <div className="grid grid-cols-1 gap-4 mt-2 sm:grid-cols-3 sm:gap-3">
                <div className="flex flex-col gap-1.5 rounded-lg bg-slate-800/50 p-3 sm:p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-400">Problema</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.problema}</p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-lg bg-slate-800/50 p-3 sm:p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">Solución</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.solucion}</p>
                </div>

                <div className="flex flex-col gap-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 p-3 sm:p-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">Resultado</span>
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
