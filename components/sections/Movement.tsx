import { Fragment } from "react"
import Link from "next/link"
import { TrendingUpIcon, ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "77%", label: "de empresas Fortune 500 ya operan con IA" },
  { value: "3.5x", label: "más rápido escalan negocios automatizados" },
  { value: "2025", label: "el año en que la IA se volvió requisito" },
]

export default function Movement() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-10">

        {/* Pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
          <TrendingUpIcon className="size-3.5" />
          El momento es ahora
        </span>

        {/* Título */}
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Esto no es el futuro.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Es el presente.
          </h2>
        </div>

        {/* Subtítulo */}
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          Cada semana que pasa, más empresas automatizan sus procesos con IA y amplían su ventaja
          competitiva. Subirse a la ola ahora no es una opción — es la diferencia entre liderar tu
          sector o quedarse atrás.
        </p>

        {/* Micro-stats */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {stats.map((stat, i) => (
            <Fragment key={stat.value}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-slate-400 max-w-[140px] text-center leading-snug">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-violet-800/50" />
              )}
            </Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 gap-2"
            asChild
          >
            <Link href="#contacto">
              Quiero saber más
              <ArrowDownIcon className="size-4" />
            </Link>
          </Button>
          <span className="text-xs text-slate-500">Sin compromiso · Consultoría gratuita</span>
        </div>

      </div>
    </section>
  )
}
