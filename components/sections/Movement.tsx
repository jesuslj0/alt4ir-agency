import { Fragment } from "react"
import Link from "next/link"
import { TrendingUpIcon, ArrowDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "77%", label: "de empresas Fortune 500 ya operan con IA" },
  { value: "3.5x", label: "Los sistemas inteligentes escalan tu negocio mucho más rápido" },
  { value: "2025", label: "el año en que la IA se volvió requisito" },
]

export default function Movement() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-10">

        {/* Pill */}
        <span className="rainbow-border inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white">
          <TrendingUpIcon className="size-3.5" />
          El momento es ahora
        </span>

        {/* Título */}
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Esto no es el futuro.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text text-transparent">
            Es el PRESENTE.
          </h2>
        </div>

        {/* Subtítulo */}
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          Cada semana que pasa, más empresas automatizan sus procesos con IA y amplían su ventaja
          competitiva. Subirse a la ola ahora no es una opción — es la diferencia entre liderar tu
          sector o quedarse atrás.
        </p>

        {/* Micro-stats */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {stats.map((stat, i) => (
            <Fragment key={stat.value}>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-brand-teal/20 bg-brand-teal/5 backdrop-blur-sm px-6 py-4 transition-colors duration-200 hover:bg-brand-teal/10 hover:border-brand-teal/40">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-slate-400 max-w-[150px] text-center leading-snug">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-brand-teal/30" />
              )}
            </Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="bg-brand-emerald hover:bg-brand-teal text-background font-semibold px-8 gap-2"
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
