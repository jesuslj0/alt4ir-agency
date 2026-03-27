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
    sector: "Taller automovilístico",
    problema:
      "Procesaban 200+ facturas al mes de forma manual con 2 personas dedicadas.",
    solucion:
      "Sistema de clasificación automática de facturas, albaranes y abonos con extracción de datos.",
    resultado:
      "80% de reducción en tiempo de procesamiento con revisión manual ocasional.",
  },
  {
    sector: "Clínica dental",
    problema: "Perdían leads por no responder mensajes fuera de horario.",
    solucion:
      "Agente de IA conversacional 24/7 conectado a WhatsApp y agenda de citas.",
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
                                className="p-8 flex flex-col items-center text-center gap-4 bg-slate-900/80"
              >
                <div className="size-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Icon className="size-6 text-violet-400" />
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-sm text-slate-400 leading-snug">{metric.label}</span>
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
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-red-400">Problema</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.problema}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-400">Solución</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{c.solucion}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-300">Resultado</span>
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
